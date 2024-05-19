const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 h-[10vh] p-6 w-full flex items-center justify-between backdrop-blur-sm border-b border-dark">
      <div className="text-2xl font-bold">
        <a href="#hero">Naphat</a>
      </div>
      <div className="flex flex-row space-x-6 text-gl">
        <a href="#aboutMe">
          <button className="hover:bg-beightDark pl-4 pr-4 pt-2 pb-2 rounded-md">
            About Me
          </button>
        </a>
        <a href="#works">
          <button className="hover:bg-beightDark pl-4 pr-4 pt-2 pb-2 rounded-md">
            Works
          </button>
        </a>
        <a href="#experience">
          <button className="hover:bg-beightDark pl-4 pr-4 pt-2 pb-2 rounded-md">
            Experience
          </button>
        </a>
        <a href="#contact">
          <button className="bg-primary pl-4 pr-4 pt-2 pb-2 rounded-md drop-shadow-lg text-white">
            Contact
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
