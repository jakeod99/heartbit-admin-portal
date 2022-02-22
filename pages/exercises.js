import { gql, useLazyQuery } from "@apollo/client"
import ExercisesTable from "../comps/ExercisesTable";

const Exercises = () => {
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

  const [getExercises, { loading, error, data }] = useLazyQuery(EXERCISES_QUERY, {
    fetchPolicy: "no-cache" // Performance hit, but solves lack of overwrite on new fetch
  });

  return ( 
    <div className="exercises-page">
      <button onClick={async () => getExercises()}>
        All Exercises
      </button>
      <button onClick={async () => getExercises({ variables: { 
        youngest: 20, 
        oldest: 40, 
        sex: ["FEMALE"], 
        race: ["ASAIN"] 
      }})}>
        Exercises for Asian Females Aged 20-40
      </button>

      <ExercisesTable data={data}/>
    </div>
  );
}
 
export default Exercises;