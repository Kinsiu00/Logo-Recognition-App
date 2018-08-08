
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
        {id: 9, company_id: 20, label: 'anacondapoweredbycontinuumanalytics'},
        {id: 10, company_id: 6, label: 'eulerty'},
        {id: 11, company_id: 38, label: 'waleet'},
        {id: 12, company_id: 18, label: 'peoplestelevision'},
        {id: 13, company_id: 32, label: 'impactpoweredbybpfranceandbusnessfrance'},
        {id: 14, company_id: 32, label: 'mpactpoweredbybpfranceandbusnessfrance'},
        {id: 15, company_id: 4, label: 'designgroupitalia'},
        {id: 16, company_id: 36, label: 'syntonygnss'},
        {id: 17, company_id: 28, label: 'hubspiree'},
        {id: 18, company_id: 29, label: 'catchandrelease'},
        {id: 19, company_id: 41, label: 'launchcapital'},
        {id: 20, company_id: 43, label: 'munichre'},
        {id: 21, company_id: 14, label: ':miles'},
        {id: 22, company_id: 14, label: '.:.miles'},
        {id: 23, company_id: 14, label: '.::.miles'},
        {id: 24, company_id: 14, label: '!!miles'}






      ]);
    });
};
