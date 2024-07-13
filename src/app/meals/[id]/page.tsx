import './single-meal.css';
import Image from 'next/image'
import {getMeal} from "@/api/api";
import {notFound} from "next/navigation";

const MealDetailsPage = async({params}) => {
  const meal = await getMeal(params.id);
  if(!meal){
    notFound();
  }
  meal.instructions= meal.instructions.replace(/\n/g, '<br/>').substring(5)
  const {image, alt, title, creator_email, summary, creator, instructions} = meal
  return (
    <>
      <header className="meal-details__header">
        <div className="meal-details__image">
          <Image src={image} alt={alt} fill/>
        </div>
        <div className="meal-details__headerText">
          <h1>{title}</h1>
          <p className="meal-details__creator"> by <a href={`mailto:${creator_email}`}>{creator}</a></p>
          <p className="meal-details__summary">{summary}</p>
        </div>
      </header>
      <main>
        <p className="meal-details__instructions" dangerouslySetInnerHTML={{
          __html: instructions,
        }}>
        </p>
      </main>
    </>
  );
};

export default MealDetailsPage;