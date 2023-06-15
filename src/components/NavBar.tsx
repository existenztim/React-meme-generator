const NavBar = () => {
  return (
    <div className="flex h-30 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-5 text-slate-50">
      <div className="flex items-center">
        <img className="logo mr-1 h-12" src="/images/logo.png" />
        <h1 className=" text-2xl font-bold sm:text-4xl">Meme-Generator</h1>
      </div>
    </div>
  );
};

export default NavBar;
