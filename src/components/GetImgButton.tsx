import { AiOutlineCodeSandbox } from 'react-icons/ai';
const GetImgButton = (props: { handleClick: () => void }) => {
  return (
    <div className=" bg-slate-100 py-3">
      <p className="alfa text-xl">Generate a new random image!</p>
      <button
        type="button" //to prevent default form behaviour
        className="flex flex-col 1 px-1 justify-center items-center m-auto border-2 border-gray-950 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-sans font-extrabold text-zinc-100"
        onClick={props.handleClick}
        aria-label="Change to randomly picked image to another one."
      >
       <AiOutlineCodeSandbox className=" text-2xl m-1"/>
      </button>
    </div>
  );
};

export default GetImgButton;
