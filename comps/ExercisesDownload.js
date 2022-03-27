import { Button } from "react-bootstrap";

const ExercisesDownload = ({ data }) => {
  if (data) {
    return ( 
      <div className="ed-container">
        <Button className="ed">TODO</Button>
      </div>
    );
  } else {
    return (
      <></>
    );
  }
}
 
export default ExercisesDownload;