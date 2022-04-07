import { gql } from "@apollo/client"

const ONE_EXERCISE_DOWNLOAD = gql`
  query DownloadOneExercises($id: String!) {
    exercise(id: $id) {
      id,
      bpmIn,
      bpmOut,
      dateCollected,
      hrv,
      cleanHrv,
      data,
      user {
        email,
        givenName,
        surname,
        smoking,
        vaping,
        weight,
        sex,
        gender,
        race,
        dob
      }
    }
  }
`;
 
export default ONE_EXERCISE_DOWNLOAD;