import { useEffect } from "react";
import { useState } from "react";
import MealItems from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    //backend로 get 요청 보내기
    async function fetchMeals() {
      //요청보내는데 실패할경우 대비

      const response = await fetch("http://localhost:3000/meals");

      // 응답에 문제발생대비(400에서 500쯤의 응답상태코드)
      if (!response.ok) {
        //
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItems key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
