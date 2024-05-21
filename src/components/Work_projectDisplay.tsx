import WorksData from '../assets/WorksData.json';

interface WorksInterface {
  name: string;
  skill: Array<string>;
  image: string;
  desc: string;
  link: string;
}

const Work_projectDisplay = () => {
  const Works: WorksInterface[] = WorksData;

  return (
    <div className="flex flex-col items-center justify-center w-[90%] sm:w-[60%] space-y-16 sm:space-y-20">
      {Works.map((work, index) => (
        <div
          key={index}
          id={`work-${index}`}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-3"
        >
          <div className="bg-beightDark w-[450px] h-[300px] rounded-3xl items-center justify-center flex">
            {work.image}
          </div>
          <p className="text-xl font-bold pt-5">{work.name}</p>
          <div className="flex flex-row space-x-3 text-sm">
            <div className="h-[35px] bg-red-400 flex items-center justify-center p-2 rounded-xl">
              TypeScript
            </div>
            <div className="h-[35px] bg-yellow-400 flex items-center justify-center p-2 rounded-xl">
              Frontend
            </div>
          </div>
          <p className="text-sm sm:text-lg w-[40vw] break-normal">
            {work.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Work_projectDisplay;
