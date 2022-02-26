const ExercisesTable = ({ data }) => {
  if (data) {
    return ( 
      <div className="etable-container">
        <table className="etable">
          <thead className="etable-head">
            <tr>
              <th className="etable-head-date-collected">Date Collected</th>
              {/* <th>Group ID</th> */}
              <th className="etable-head-email">Email</th>
              <th className="etable-head-dob">Date of Birth</th> 
              <th className="etable-head-sex">Sex</th>
              <th className="etable-head-gender">Gender</th>
              <th className="etable-head-race">Race</th>
              <th className="etable-head-weight">Weight</th>
              <th className="etable-head-bpm-in">Inhale BPM</th>
              <th className="etable-head-bpm-out">Exhale BPM</th>
              <th className="etable-head-data">Readings</th>
              <th className="etable-head-clean">Clean?</th>
            </tr>
          </thead>
          <tbody className="etable-body">
            {data?.exercises?.map(exercise => (
              <tr>
                <th>{exercise.dateCollected.split("T")[0]}</th>
                {/* <th>Group ID</th> */}
                <th>{exercise.user.email}</th>
                <th>{exercise.user.dob.split("T")[0]}</th>
                <th>{exercise.user.sex}</th>
                <th>{exercise.user.gender}</th>
                <th>{exercise.user.race}</th>
                <th>{exercise.user.weight}lbs</th>
                <th>{exercise.bpmIn}bpm</th>
                <th>{exercise.bpmOut}bpm</th>
                <th>Download (soon)</th>
                <th>{exercise.status}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return ( 
      <></>
    );
  }
}
 
export default ExercisesTable;