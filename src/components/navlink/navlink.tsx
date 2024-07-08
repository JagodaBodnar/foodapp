'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import './navlink.css'

type Props ={
  href: string
}

const NavLink = ({href, linkName}: Props) => {
  const pathname= usePathname();
  return (
      <Link href={href} className={pathname === href ? "nav-link active" : "nav-link"}>{linkName}</Link>
  );
};

export default NavLink;