import Logo from "../widgets/Logo";
import { HashLink } from "react-router-hash-link";

function Header() {
  // TODO: later routes will be added here
  const navLinks = ["About", "Work", "Ethics", "Email me"];

  return (
    <header className="py-8">
      {/* Logo and name */}
      <div className="self flex justify-center items-center">
        {/* Logo */}
        <Logo />

        {/* Name */}
        <div className="name text-left">
          <h1 className="text-md font-semibold uppercase leading-3">Sulabh</h1>
          <h1 className="text-md font-semibold uppercase">Shrestha</h1>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="flex justify-center gap-4">
        {navLinks.map((link) => (
          <HashLink
            key={link}
            className="uppercase text-sm font-semibold mt-6 border-b-2 border-dotted hover:border-solid border-slate-600 cursor-pointer"
            smooth
            to={`/#${link}`}
          >
            {link}
          </HashLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
