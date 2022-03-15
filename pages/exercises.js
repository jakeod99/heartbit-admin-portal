import { useLazyQuery } from "@apollo/client"
import EXERCISES_QUERY from "../external/queries/exercises";
import ExercisesTable from "../comps/ExercisesTable";
import ExercisesForm from "../comps/ExercisesForm"; 

const Exercises = () => {
  const [getExercises, { loading, error, data }] = useLazyQuery(EXERCISES_QUERY, {
    fetchPolicy: "no-cache" // Performance hit, but solves lack of overwrite on new fetch
  });

  return ( 
    <div className="exercises-page">
      <ExercisesForm getExercises={getExercises} />
      <ExercisesTable data={data} />
    </div>
  );
}
 
export default Exercises;