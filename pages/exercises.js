import { gql, useLazyQuery } from "@apollo/client"

const Exercises = () => {
  const EXERCISES_QUERY = gql`
    query GetExercises {
      exercises {
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

  const [getExercises, { loading, error, data }] = useLazyQuery(EXERCISES_QUERY);

  return ( 
    <div className="exercises-page">
      <button onClick={() => getExercises()}>Click for exercises</button>
      <table>
        <tr>
          <th>Date Collected</th>
          {/* <th>Group ID</th> */}
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Sex</th>
          <th>Gender</th>
          <th>Race</th>
          <th>Weight</th>
          <th>Inhale BPM</th>
          <th>Exhale BPM</th>
          <th>Readings</th>
          <th>Clean?</th>
        </tr>
        {data?.exercises?.map(exercise => (
          <tr>
            <th>{exercise.dateCollected}</th>
            {/* <th>Group ID</th> */}
            <th>{exercise.user.email}</th>
            <th>{exercise.user.dob}</th>
            <th>{exercise.user.sex}</th>
            <th>{exercise.user.gender}</th>
            <th>{exercise.user.race}</th>
            <th>{exercise.user.weight}</th>
            <th>{exercise.bpmIn}</th>
            <th>{exercise.bpmOut}</th>
            <th>BUTTON TBD</th>
            <th>{exercise.status}</th>
          </tr>
        ))}
      </table>
    </div>
  );
}
 
export default Exercises;