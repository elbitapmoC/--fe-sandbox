import Link from "next/link";
import Logo from "./logo";

const Nav = () => {
  return (
    <nav className="">
      <Link href="/">
        <Logo />
      </Link>
    </nav>
  );
};

export default Nav;
