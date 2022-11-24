import Link from "next/link";
import Logo from "./(icons)/logo";

const Nav = () => {
  return (
    <nav className="">
      <Link href="/" aria-label="Navigate back home.">
        <Logo />
        <span className="invisible">Home</span>
      </Link>
    </nav>
  );
};

export default Nav;
