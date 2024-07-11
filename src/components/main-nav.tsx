import './main-nav.css'
import Link from "next/link";
import NavLink from "@/components/navlink/navlink";
import {GiKnifeFork} from "react-icons/gi";

const MainNav = () => {

  return (
    <nav className="main-nav">
      <Link href="/"><GiKnifeFork className="main-nav__logo"/></Link>
      <div className="main-nav__wrapper">
        <NavLink href="/" linkName="Home"/>
        <NavLink href="/meals" linkName="Meals"/>
      </div>
    </nav>
  );
};

export default MainNav;