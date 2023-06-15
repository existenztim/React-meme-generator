const NavBar = () => {
  return (
    <div className="flex h-30 items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500 p-5 text-slate-50">
      <div className="flex items-center">
        <img className="logo mr-1 h-12" src="/images/logo.png" />
        <h1 className=" text-4xl font-bold">Meme-Generator</h1>
      </div>
    </div>
  );
};

export default NavBar;
