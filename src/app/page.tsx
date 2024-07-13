import ImageSlideshow from "@/components/image-slideshow/image-slideshow";
import Link from "next/link";
import './page.css'

export default function Home() {
  return (
    <div className="page-wrapper">
      <header className="home-header">
        <h1>Make Your <span className="highlight">Dream Food</span> With Us</h1>
      </header>
      <main>
        <section className="slideshow-section">
          <ImageSlideshow/>
          <div className="slideshow-title">
            <h2></h2>
            <p>It's A New Season. Let's get <span className="highlight">Cooking</span></p>
            <Link href="/meals" className="slideshow-button">Check out our new recipes!</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
