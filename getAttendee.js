const axios = require('axios');
const headers = require('./headers');
const query = `query GET_ATTENDEE($attendeeId: ID, $locale: String) {
  getAttendee(attendeeId: $attendeeId, locale: $locale) {
    firstName
    lastName
    title
    company
    profilePicture
    prefix
    designation
    biography
    facebookUrl
    linkedInUrl
    twitterUrl
    websiteUrl
    guest
    player {
      id
      leaderboardOptOut
      totalScore
      rank
      progress {
        achievementId
        achievementName
        level
        totalPoints
        fractionCompleted
        stickerName
        goalProgress {
          goalId
          count
          points
          fractionCompleted
          __typename
        }
        __typename
      }
      __typename
    }
    address {
      city
      region
      country
      __typename
    }
    answers {
      questionId
      filterName
      filterOrder
      value
      __typename
    }
    connectionStatus
    professionalInterests {
      id
      text
      commonInterest
      __typename
    }
    __typename
  }
}`

const endpoint = 'https://web-eur.cvent.com/hub/graphqlv2'
const get = async (id) => {
  const variables = {
    "attendeeId": id,
    "locale": "en-US"
  };

  const {data: {data}} = await axios.post(endpoint, {
    query,
    variables
  },{
    headers,
  })
  
  console.log(data)

};

get("b158d0ae-e5d2-4ee8-b2ba-7908def6e3cd")