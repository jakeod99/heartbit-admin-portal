import { useLazyQuery } from "@apollo/client"
import EXERCISES_QUERY from "../external/queries/exercisesQuery";
import ExercisesTable from "../comps/ExercisesTable";
import ExercisesForm from "../comps/ExercisesForm"; 

const Data = () => {
  const [getExercises, { loading: geLoading, error: geError, data: geData }] = useLazyQuery(EXERCISES_QUERY, {
    fetchPolicy: "no-cache" // Performance hit, but solves lack of overwrite on new fetch
  });

  return ( 
    <div className="data-page">
      <ExercisesForm getExercises={getExercises} geData={geData} />
      <ExercisesTable geLoading={geLoading} geData={geData} />
    </div>
  );
}
 
export default Data;