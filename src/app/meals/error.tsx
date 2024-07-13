'use client'
import './error.css'
const Error = () => {
  return (
    <div className="error-wrapper">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </div>
  );
};

export default Error;