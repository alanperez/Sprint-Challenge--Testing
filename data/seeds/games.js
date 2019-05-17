
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: "Counter-Strike:Source", genre: 'FPS SHOOTER', releaseYear: 2004},
        {title: "Counter-Strike 1.6", genre: 'FPS SHOOTER', releaseYear: 1996},
        {title: "Counter-Strike:Global Offensive", genre: 'FPS SHOOTER', releaseYear: 2012}
      ]);
    });
};
