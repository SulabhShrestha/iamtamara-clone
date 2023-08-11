/***
 * Displays design ethics
 */

function DesignEthics() {
  const ethics = [
    {
      title: "Accessible design",
      body: "A great website is designed for all people by default. That means considering people who use assistive technology and being mindful of everyone's ability to process information.",
    },

    {
      title: "Ethical design",
      body: "An ethical website prioritizes transparency over agenda. It clearly communicates the purpose, benefits and potential risks associated with your site",
    },
    {
      title: "Sustainable design",
      body: "The web isn't green. Reducing how much data we store, how many emails we send, and how heavy our pages are serves people's experience as well as the planet. ",
    },
  ];

  return (
    <div className="design-ethics mb-12 pb-8">
      <h1 className="text-left text-3xl border-black border-b-2 border-dashed inline-block float-left clear-both">
        Design <span className="font-semibold">ethics</span>
      </h1>

      <div className="ethics clear-left pt-8 flex gap-8">
        {ethics.map((ethic) => (
          <div className="ethic" key={ethic.title}>
            <h2 className="text-lg font-semibold">{ethic.title}</h2>
            <p className="text-left">{ethic.body}</p>
          </div>
        ))}
      </div>

      <div className="my-12 bg-blue-200 border-y-2 border-black py-6 text-md">
        <span className="font-semibold">Did you know?</span> Accessibility concerns 87 millions of people
        in the EU. That's 1 in 4 adults.
      </div>
    </div>
  );
}

export default DesignEthics;
