import { gql } from "@apollo/client";

export const ALL_TRACK_DEPLOY = gql`
  query {
    allTrackDeploy {
      data {
        _id
        name
        entryTime
        entryDate
        entryNumber
      }
    }
  }
`;
