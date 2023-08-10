import Logo from "../widgets/Logo";

function Header() {

  // TODO: later routes will be added here
  const navLinks = [
    {
      title: "About",
    },
    {
      title: "Work",
    },
    {
      title: "Ethics",
    },
    {
      title: "Email me",
    },
  ];

  return (
    <header className="py-8">
      {/* Logo and name */}
      <div className="self flex justify-center items-center">
        {/* Logo */}
        <Logo/>

        {/* Name */}
        <div className="name text-left">
          <h1 className="text-md font-semibold uppercase leading-3">
            Sulabh
          </h1>
          <h1 className="text-md font-semibold uppercase">
            Shrestha
          </h1>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="flex justify-center gap-4">
        
          {navLinks.map(link => (
            <a
              key={link.title}
              className="uppercase text-sm font-semibold mt-6 border-b-2 border-dotted hover:border-solid border-slate-600 cursor-pointer"
            >
              {link.title}
            </a>
          ))}
        
      </nav>
    </header>
  );
}

export default Header;
