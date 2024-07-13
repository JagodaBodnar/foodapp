import {getMeals} from "@/api/api";
import MealItem from "@/components/meal-item/meal-item";
import './page.css'
import Link from "next/link";
import {Suspense} from "react";
import Loading from "@/components/loading/loading";

const Meals = async () => {
  const meals = await getMeals();
  return (
    meals.map(meal => {
      const {title, id, image, summary, creator, mealId} = meal
      return (
        <MealItem key={id} title={title} id={mealId} image={image} summary={summary} creator={creator}/>
      )
    })
  )
}

const MealsPage = () => {
  return (
    <>
      <header className="meals-header">
        <h1>Delicious meal, created for you</h1>
        <p>Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
        <Link className="meals-share__button" href="/meals/share">Share your favourite recipe</Link>
      </header>
      <main className="meals-main">
        <Suspense fallback={<Loading/>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;