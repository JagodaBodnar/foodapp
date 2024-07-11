import Image from "next/image"
import Link from "next/link";
import './meal-item.css'

const MealItem = ({title, id, image, summary, creator}) => {
  return (
    <article className="meal-item__card">
      <header className="meal-item__header">
        <div className="meal-item__image">
          <Image src={image} alt={title} fill/>
        </div>
        <div className="meal-item__header-text">
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className="meal-item__content">
        <p className="meal-item__summary">{summary}</p>
        <div className="meal-item__actions">
          <Link href={`/meals/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;