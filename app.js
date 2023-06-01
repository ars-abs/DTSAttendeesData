const axios = require('axios');
const headers = require('./headers');
const query = require('./query');

const endpoint = 'https://web-eur.cvent.com/hub/graphqlv2'
const variables = {
  "criteria": {
    "pageCriteria": {
      "limit": 2
    }
  }
};

(async () => {
  const {data: {data: { searchAttendees: {pagination, data} }}} = await axios.post(endpoint, {
    query,
    variables
  },{
    headers,
  })
  
  console.log({pagination, data})

})()