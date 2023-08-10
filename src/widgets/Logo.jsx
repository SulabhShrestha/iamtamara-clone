import myImage from "../assets/me.jpeg"

/**
 * 
 * Return a log component
 * @param {bool} props.image - Whether to add image
 * @param {bool} props.scale - Whether to scale component
 */
function Logo(props) {

  const addBackgroundImage = {
    "background-image": `url(${myImage})`,
  };

  return (
    <div className={`tamara-logo  relative bg-black w-[80px] h-[100px] block rounded-[50%/50%] -rotate-45 ${props.scale ? "scale-150": "scale-50"}`}>
      <div className="absolute bg-amber-100 w-[70px] h-[90px] rounded-[50%/50%] rotate-65 -bottom-2 left-7 border-2 border-black">
        {props.image? <div
          style={addBackgroundImage}
          className="w-full h-full bg-cover rounded-[50%/50%]"
        ></div>: null}
      </div>
    </div>
  );
}

export default Logo;
