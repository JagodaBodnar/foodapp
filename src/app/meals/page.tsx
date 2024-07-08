import React from 'react';
import Link from "next/link";

const MealsPage = () => {
  const id = Math.round(Math.random()*100);
  return (
    <div>
      <h1>Meals page</h1>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share</Link>
      <Link href={`/meals/${id}`}>Go to random meal</Link>
      <Link href="/community">Community</Link>
    </div>
  );
};

export default MealsPage;