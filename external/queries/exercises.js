import { gql } from "@apollo/client"

const EXERCISES_QUERY = gql`
  query GetExercises (
    $youngest: Int
    $oldest: Int
    $lightest: Int
    $heaviest: Int
    $email: String
    $groupId: String
    $sex: [Sex]
    $gender: [Gender]
    $race: [Race]
    $smoking: [SmokingHistory]
    $vaping: [VapingHistory]
    $earliestCollection: DateTime
    $latestCollection: DateTime
    $clean: [ExerciseStatus]
  ) {
    exercises(
      youngest: $youngest,
      oldest: $oldest,
      lightest: $lightest,
      heaviest: $heaviest,
      email: $email,
      groupId: $groupId,
      sex: $sex,
      gender: $gender,
      race: $race,
      smoking: $smoking,
      vaping: $vaping,
      earliestCollection: $earliestCollection,
      latestCollection: $latestCollection,
      clean: $clean,
    ) {
      id,
      bpmIn,
      bpmOut,
      dateCollected,
      status,
      user {
        email,
        dob,
        sex,
        gender,
        race,
        weight
      }
    }
  }
`;
 
export default EXERCISES_QUERY;