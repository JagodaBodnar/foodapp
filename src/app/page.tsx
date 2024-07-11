import ImageSlideshow from "@/components/image-slideshow/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-wrapper">
      <header className="home-header">
        <h1> A genuine fine-dining experience awaits.</h1>
      </header>
      <main>
        <section className="slideshow-section">
          <ImageSlideshow/>
          <div className="slideshow-title">
            <h2>Only today discount 50% do not miss it!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
            <Link href="/meals" className="slideshow-button">Check out our new menu!</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
