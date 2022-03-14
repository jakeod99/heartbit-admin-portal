import { Button, Table } from "react-bootstrap";

const ExercisesTable = ({ data }) => {
  if (data) {
    return ( 
      <div className="et-container">
        <Table striped className="et">
          <thead className="et-head">
            <tr>
              <th className="et-head-date-collected">Collected</th>
              {/* <th>Group ID</th> */}
              <th className="et-head-email">Email</th>
              <th className="et-head-dob">Date of Birth</th> 
              <th className="et-head-sex">Sex</th>
              <th className="et-head-gender">Gender</th>
              <th className="et-head-race">Race</th>
              <th className="et-head-weight">Weight</th>
              <th className="et-head-bpm-in">Inhale</th>
              <th className="et-head-bpm-out">Exhale</th>
              <th className="et-head-data">Readings</th>
              <th className="et-head-clean">Clean?</th>
            </tr>
          </thead>
          <tbody className="et-body">
            {data?.exercises?.map(exercise => (
              <tr>
                <td className="et-head-date-collected">{exercise.dateCollected.split("T")[0]}</td>
                {/* <th>Group ID</th> */}
                <td className="et-head-email">{exercise.user.email}</td>
                <td className="et-head-dob">{exercise.user.dob.split("T")[0]}</td>
                <td className="et-head-sex">{exercise.user.sex}</td>
                <td className="et-head-gender">{exercise.user.gender.replace(/_/g, " ").replace("GENDER ", "")}</td>
                <td className="et-head-race">{exercise.user.race.replace(/_/g, " ")}</td>
                <td className="et-head-weight">{exercise.user.weight}lbs</td>
                <td className="et-head-bpm-in">{exercise.bpmIn}bpm</td>
                <td className="et-head-bpm-out">{exercise.bpmOut}bpm</td>
                <td className="et-head-data">
                  <Button variant="primary">TODO</Button>
                </td>
                <td className="et-head-clean">{exercise.status.replace("DIRTY", "RAW")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return ( 
      <></>
    );
  }
}
 
export default ExercisesTable;