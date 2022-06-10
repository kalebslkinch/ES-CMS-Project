import { gql } from '@apollo/client';

export const ADD_TRACK_DEPLOY = gql`
  mutation AddTrackDeploy($data: TrackDeployInput!) {
    createTrackDeploy(data: $data) {
      userID
      name
      entryTime
      entryDate
      entryNumber
    }
  }
`;
