import { useLazyQuery } from "@apollo/client";
import { Button } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import EXERCISES_DOWNLOAD from "../external/queries/exercisesDownload";
import zipDownload from "../util/download";

const ExercisesDownload = ({lastSearchTerms, geData}) => {
  const [downloadExercises, { loading: deLoading, error: deError, data: deData }] = useLazyQuery(EXERCISES_DOWNLOAD, {
    fetchPolicy: "no-cache", // Performance hit, but solves lack of overwrite on new fetch
    skip: !geData,
    onCompleted: data => zipDownload(data)
  });

  if (geData) {
    if (deLoading) {
      return (
        <div>Loading...</div>
      );
    } else {
      return ( 
        <div className="ed-container">
          <Button className="ed" onClick={() => downloadExercises(lastSearchTerms)}>
            <BsDownload /> Download All Data From Search Results <BsDownload />
          </Button>
        </div>
      );
    }
  } else {
    return (
      <></>
    );
  }
}
 
export default ExercisesDownload;