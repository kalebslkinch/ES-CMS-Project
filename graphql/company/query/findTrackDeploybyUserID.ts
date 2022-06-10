import { gql } from "@apollo/client";

const GET_TRACK_DEPLOY_USER_ID = gql`
  query($userID: String!) {
    findTrackDeploybyUserID(userID: $userID) {
      userID
      name
      entryTime
      entryDate
      entryNumber
    }
  }
`;

export default GET_TRACK_DEPLOY_USER_ID;
