import { AiFillCamera } from 'react-icons/ai';
const GetImgButton = (props: { handleClick: () => void }) => {
  return (
    <div>
      <p className="text-xl font-bold">Generate a new random image!</p>
      <button
        type="button" //to prevent default form behaviour
        className="flex flex-col 1 px-1 justify-center items-center mx-auto border-2 border-gray-950 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-sans font-extrabold text-zinc-100"
        onClick={props.handleClick}
        aria-label="Change to randomly picked image to another one."
      >
       <AiFillCamera className=" text-2xl m-1"/>
      </button>
    </div>
  );
};

export default GetImgButton;
