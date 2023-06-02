const fs = require('fs');
const axios = require('axios');
const headers = require('./headers');
const query = require('./query');

const endpoint = 'https://web-eur.cvent.com/hub/graphqlv2'
const attendees = []
const getAll = async (token) => {
  const variables = {
    criteria: {
      pageCriteria: {
        limit:200,
        token
      }
    }
  };
  const {data: {data: { searchAttendees: {pagination: {nextToken}, data} }}} = await axios.post(endpoint, JSON.stringify({
    query,
    variables
  }),{
  headers,
})
attendees.push(data)
nextToken ? await getAll(nextToken) : console.log('finished')
}

(async () => {
  await getAll()
  const jsonData = JSON.stringify({attendees: attendees.reduce((acc,val)=>[...acc,...val],[])}, null, 2);
  fs.writeFile('data.json', jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return;
    }
    console.log('JSON file has been created.');
  });
})()