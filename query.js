const query = `query SEARCH_ATTENDEES($criteria: AttendeeSearchCriteria) {
  searchAttendees(criteria: $criteria) {
    pagination {
      limit
      totalCount
      currentToken
      nextToken
      __typename
    }
    data {
      id
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

    connectionStatus
    professionalInterests {
      id
      text
      commonInterest
      __typename
    }
      
    }
    __typename
  }
}`

module.exports =query