const NavBar = () => {
  return (
    <div className=" flex h-16 items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500 p-5 text-slate-50">
      <div className="flex items-center">
        <img className=" mr-4 h-12" src="/images/logo.png" />
        <h1 className="text-xl font-bold">Meme-Generator</h1>
      </div>
      <p className=" text-xl font-semibold">Make something fun!</p>
    </div>
  );
};

export default NavBar;
