import { Button, Table } from "react-bootstrap";

const ExercisesTable = ({ data }) => {
  if (data) {
    return ( 
      <div className="et-container">
        <Table striped className="et">
          <thead className="et-head">
            <tr>
              <th className="et-head-date-collected">Collected</th>
              {/* <th className="et-head-group">Group ID</th> */}
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
                <td className="et-body-date-collected">{exercise.dateCollected.split("T")[0]}</td>
                {/* <td className="et-body-group">Group ID</td> */}
                <td className="et-body-email">{exercise.user.email}</td>
                <td className="et-body-dob">{exercise.user.dob.split("T")[0]}</td>
                <td className="et-body-sex">{exercise.user.sex}</td>
                <td className="et-body-gender">{exercise.user.gender.replace(/_/g, " ").replace("GENDER ", "")}</td>
                <td className="et-body-race">{exercise.user.race.replace(/_/g, " ")}</td>
                <td className="et-body-weight">{exercise.user.weight}lbs</td>
                <td className="et-body-bpm-in">{exercise.bpmIn}bpm</td>
                <td className="et-body-bpm-out">{exercise.bpmOut}bpm</td>
                <td className="et-body-data">
                  <Button variant="primary">TODO</Button>
                </td>
                <td className="et-body-clean">{exercise.status.replace("DIRTY", "RAW")}</td>
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