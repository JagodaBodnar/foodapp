import './main-nav.css'
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import NavLink from "@/components/navlink/navlink";

const MainNav = () => {

  return (
    <nav className="main-nav">
      <Link href="/"><Image src={logo} alt="logo"/></Link>
      <NavLink  href="/meals" linkName="Meals"/>
      <NavLink  href="/community" linkName="Community"/>
    </nav>
  );
};

export default MainNav;