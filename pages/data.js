import { useLazyQuery } from "@apollo/client"
import EXERCISES_QUERY from "../external/queries/exercisesQuery";
import EXERCISES_DOWNLOAD from "../external/queries/exercisesDownload";
import ExercisesTable from "../comps/ExercisesTable";
import ExercisesForm from "../comps/ExercisesForm"; 
import ExercisesDownload from "../comps/ExercisesDownload";

const Data = () => {
  const [getExercises, { loading: geLoading, error: geError, data: geData }] = useLazyQuery(EXERCISES_QUERY, {
    fetchPolicy: "no-cache" // Performance hit, but solves lack of overwrite on new fetch
  });

  return ( 
    <div className="data-page">
      <ExercisesForm getExercises={getExercises} />
      {/* <ExercisesDownload downloadExercises={downloadExercises} /> */}
      <ExercisesTable geData={geData} />
    </div>
  );
}
 
export default Data;