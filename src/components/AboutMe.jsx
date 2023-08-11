/**
 * Contains who am I details and social profile handler
 */
import { useEffect, useState } from "react";
import Logo from "../widgets/Logo";

function AboutMe() {
  // design and good text style
  const largeTextStyle = "text-4xl font-semibold";

  const navLinks = [
    {
      title: "LinkedIn",
      website: "https://www.linkedin.com/",
    },

    {
      title: "Facebook",
      website: "https://www.facebook.com/",
    },
    {
      title: "Twitter",
      website: "https://twitter.com/",
    },
  ];

  // if user had scrolled to down: true, else: false
  const [isPositionTop, setIsPositionTop] = useState(false);

  useEffect(() => {
    function handleScroll() {

      if(window.scrollY !== 0) setIsPositionTop(true);
      else setIsPositionTop(false);
      
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the listener on unmount
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <section id="About" className="slogan pb-6 border-b-2 mb-10 border-black border-dashed">
        <h1 className="text-2xl">
          UX <span className={largeTextStyle}>DESIGN</span> FOR{" "}
          <span className={largeTextStyle}>GOOD</span>
        </h1>
      </section>

      <section className="who-a-i">
        <div className="upper-part flex gap-20 justify-center">
          <Logo image={true} scale={true} flip={isPositionTop}/>

          <div className="social-links flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.title}
                className="uppercase text-sm font-semibold border-b-2 border-dotted hover:border-solid border-slate-600 cursor-pointer"
                href={link.website}
                target="_blank"
                rel="noreferrer"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 pb-8 border-b-2 border-dashed border-black">
          I’m Sulabh, a freelance UX designer based in Nepal. I craft accessible
          websites and mobile apps using tech for good.
        </p>
      </section>
    </>
  );
}

export default AboutMe;