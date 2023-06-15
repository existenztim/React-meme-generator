const GetImgButton = (props: { handleClick: () => void }) => {
  return (
    <div>
      <button
        type="button" //to prevent default form behaviour
        className=" rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-5 font-sans font-extrabold text-zinc-100"
        onClick={props.handleClick}
      >
        Get a new image!
      </button>
    </div>
  );
};

export default GetImgButton;
