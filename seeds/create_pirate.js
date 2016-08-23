
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pirates').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('pirates').insert({name: 'Anne Bonney',poison: 'Rum',accessory: 'hot temper'}),
        knex('pirates').insert({name: 'Jim Blows',poison: 'margs',accessory: 'pegged leg'}),
        knex('pirates').insert({name: 'Ben Rules',poison: 'beer',accessory: 'parrot'})
      ]);
    });
};
