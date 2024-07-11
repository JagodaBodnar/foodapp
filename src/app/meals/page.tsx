import {getMeals} from "@/api/api";

const MealsPage = async() => {
const meal = await getMeals();

  return (
    <div>
      <h1>Meals page</h1>
    </div>
  );
};

export default MealsPage;