import MealItems from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log(loadedMeals);

  if (isLoading) {
    return <p className="center">메뉴 가져오는중..</p>;
  }

  if (error) {
    return <Error title="메뉴를 가져오는데 실패하였습니다" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItems key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
