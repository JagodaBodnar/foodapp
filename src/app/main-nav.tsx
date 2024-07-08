import React from 'react';
import Link from "next/link";
import logo from './assets/logo.png'

const MainNav = () => {
  return (
    <nav className="main-nav">
      <Link href="/"><img src={logo.src} alt="logo"/></Link>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share</Link>
      <Link href="/community">Community</Link>
    </nav>
  );
};

export default MainNav;