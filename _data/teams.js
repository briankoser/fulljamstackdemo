const fetch = require('node-fetch');

module.exports = async function() {
    return await fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA")
        .then(response => response.json())
        .then(response => response.teams);
};