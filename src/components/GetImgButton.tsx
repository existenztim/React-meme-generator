import { AiFillCamera } from 'react-icons/ai';
const GetImgButton = (props: { handleClick: () => void }) => {
  return (
    <div className="fixed top-0 right-0">
      <button
        type="button" //to prevent default form behaviour
        className="flex gap-2  px-1 h-16 justify-center items-center m-auto border-2 border-gray-950 rounded-s-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-sans font-extrabold text-zinc-100"
        onClick={props.handleClick}
      >
        Get a new image!<AiFillCamera className=" text-2xl"/>
      </button>
    </div>
  );
};

export default GetImgButton;
