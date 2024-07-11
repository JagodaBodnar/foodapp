import {getMeals} from "@/api/api";
import MealItem from "@/components/meal-item/meal-item";
import './page.css'
import Link from "next/link";

const MealsPage = async () => {
  const meals = await getMeals();

  return (
    <>
      <header className="meals-header">
        <h1>Delicious meal, created for you</h1>
        <p>Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
        <Link className="meals-share__button" href="/">Share your favourite recipe</Link>
      </header>
      <main className="meals-main">
        {meals.map(meal => {
          const {title, id, image, summary, creator} = meal
          return (
            <MealItem key={id} title={title} id={id} image={image} summary={summary} creator={creator}/>
          )
        })}
      </main>
    </>
  );
};

export default MealsPage;