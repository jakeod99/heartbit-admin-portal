const ExercisesTable = ({ data }) => {
  if (data) {
    return ( 
      <table>
        <thead>
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
        </thead>
        <tbody>
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
              <th>Download Button (soon)</th>
              <th>{exercise.status}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return ( <></> );
  }
}
 
export default ExercisesTable;