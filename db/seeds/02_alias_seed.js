
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('alias').del()
    .then(function () {
      // Inserts seed entries
      return knex('alias').insert([
        {id: 1, company_id: 9, label: 'e)eden'},
        {id: 2, company_id: 9, label: ')eden'},
        {id: 3, company_id: 9, label: 'θeden'},
        {id: 4, company_id: 9, label: '曰eden'},
        {id: 5, company_id: 34, label: 'solio'},
        {id: 6, company_id: 3, label: 'gowatchlt'},
        {id: 7, company_id: 3, label: 'qgowatchit'},
        {id: 8, company_id: 3, label: 'qgowatchlt'},


      ]);
    });
};
