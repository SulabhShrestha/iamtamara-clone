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
    <header className="bg-green-300 py-8">
      {/* Logo and name */}
      <div className="self flex justify-center items-center">
        {/* Logo */}
        <div className="tamara-logo  relative bg-black w-[80px] h-[100px] block rounded-[50%/50%] -rotate-45">
          <div className="absolute bg-amber-100 w-[70px] h-[90px] rounded-[50%/50%] rotate-17 bottom-0 left-7"></div>
        </div>

        {/* Name */}
        <div className="name ml-6 text-left">
          <h1 className="text-lg font-semibold text-white uppercase leading-3">
            Sulabh
          </h1>
          <h1 className="text-lg font-semibold text-white uppercase">
            Shrestha
          </h1>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="flex justify-center gap-4">
        
          {navLinks.map(link => (
            <a
              key={link.title}
              className="text-white uppercase text-sm font-semibold mt-6 border-b-2 border-dotted hover:border-solid border-slate-600 cursor-pointer"
            >
              {link.title}
            </a>
          ))}
        
      </nav>
    </header>
  );
}

export default Header;
