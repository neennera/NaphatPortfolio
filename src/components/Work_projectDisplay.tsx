const Work_projectDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] sm:w-[60%] space-y-4 sm:space-y-3">
      <div className="bg-beightDark w-[450px] h-[300px] rounded-3xl items-center justify-center flex">
        image
      </div>
      <p className="text-xl font-bold pt-5">Project Name</p>
      <div className="flex flex-row space-x-3 text-sm">
        <div className="h-[35px] bg-red-400 flex items-center justify-center p-2 rounded-xl">
          TypeScript
        </div>
        <div className="h-[35px] bg-yellow-400 flex items-center justify-center p-2 rounded-xl">
          Frontend
        </div>
      </div>
      <p className="text-sm sm:text-lg w-[40vw] break-normal">
        Description Descrip tionDesc riptionDescriptionDescr iptionDescrip tionD
        escriptionDescription
      </p>
    </div>
  );
};

export default Work_projectDisplay;
