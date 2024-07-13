import './share.css'
import ImagePicker from "@/components/image-picker/image-picker";

const Page = () => {
  return (
    <>
      <header className="share-header">
        <h1>Share your <span className="highlight">favourite meal</span></h1>
        <p>Or any other meal you feel need sharing!</p>
      </header>
      <main className="share-main">
        <form className="share-form">
          <fieldset className="share-form__row">
            <legend className="share-form__label">Your name</legend>
            <input id="name" name="name" required/>
          </fieldset>
          <fieldset className="share-form__row">
            <legend className="share-form__label">Your email</legend>
            <input id="email" name="email" required/>
          </fieldset>
          <fieldset className="share-form__row">
            <legend className="share-form__label">Title</legend>
            <input type="text" id="title" name="title" required/>
          </fieldset>
          <fieldset className="share-form__row">
            <legend className="share-form__label">Short summary</legend>
            <input type="text" id="summary" name="summary" required/>
          </fieldset>
          <fieldset className="share-form__row">
            <legend className="share-form__label">Instructions</legend>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </fieldset>
          <ImagePicker name="image" label="Choose image"/>
          <button type="submit" className="share-actions">Share Meal</button>
        </form>
      </main>
    </>
  );
};

export default Page;