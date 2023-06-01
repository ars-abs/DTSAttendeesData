const axios = require('axios');
const headers = require('./headers');
const query = require('./query');

const endpoint = 'https://web-eur.cvent.com/hub/graphqlv2'

const getAll = async (limit=25, token=undefined) => {
  const variables = {
    criteria: {
      pageCriteria: {
        limit,
        token
      }
    }
  };
  const {data: {data: { searchAttendees: {pagination, data} }}} = await axios.post(endpoint, JSON.stringify({
    query,
    variables
  }),{
    headers,
  })
  
  console.log({data, pagination })
}

getAll()