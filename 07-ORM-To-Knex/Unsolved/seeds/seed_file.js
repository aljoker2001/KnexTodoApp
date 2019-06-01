
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {text: 'Get tums', completed: true},
        {text: 'Get toilet paper'},
        {text: 'Get plunger'}
      ]);
    });
};
