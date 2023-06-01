const axios = require('axios');
const headers = require('./headers');
const query = require('./query');

const endpoint = 'https://web-eur.cvent.com/hub/graphqlv2'
const variables = `{
  "criteria": {
    "pageCriteria": {
      "limit": 10
    }
  }
}`;

(async () => {
  const {data: {data: { searchAttendees }}} = await axios.post(endpoint, {
    query,
    variables
  },{
    headers,
  })
  
  console.log(searchAttendees)

})()