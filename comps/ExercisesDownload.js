import { Button } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";

const ExercisesDownload = ({ downloadExercises, data }) => {
  if (data) {
    return ( 
      <div className="ed-container">
        <Button className="ed">
          <BsDownload /> Download All Data From Search Results <BsDownload />
        </Button>
      </div>
    );
  } else {
    return (
      <></>
    );
  }
}
 
export default ExercisesDownload;