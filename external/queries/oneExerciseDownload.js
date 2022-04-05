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
      bpm,
      data,
      user {
        email,
        givenName,
        surname
      }
    }
  }
`;
 
export default ONE_EXERCISE_DOWNLOAD;