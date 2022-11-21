import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./logo";

const Nav = () => {
  const [color, setColor] = useState('white');
  useEffect(() => {
    const element = document.querySelector('body')
    const style = getComputedStyle(element)
    setColor(style.color);
  }, []);

  return (
    <nav className="">
      <Link href="/">
        <Logo fill={color} />
      </Link>
    </nav>
  );
};

export default Nav;
