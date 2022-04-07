import { gql } from "@apollo/client"

const EXERCISES_DOWNLOAD = gql`
  query DownloadExercises (
    $youngest: Int
    $oldest: Int
    $lightest: Int
    $heaviest: Int
    $email: String
    $sex: [Sex]
    $gender: [Gender]
    $race: [Race]
    $smoking: [SmokingHistory]
    $vaping: [VapingHistory]
    $earliestCollection: DateTime
    $latestCollection: DateTime
  ) {
    exercises(
      youngest: $youngest,
      oldest: $oldest,
      lightest: $lightest,
      heaviest: $heaviest,
      email: $email,
      sex: $sex,
      gender: $gender,
      race: $race,
      smoking: $smoking,
      vaping: $vaping,
      earliestCollection: $earliestCollection,
      latestCollection: $latestCollection,
    ) { 
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
 
export default EXERCISES_DOWNLOAD;