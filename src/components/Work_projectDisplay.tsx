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

  // color
  const bgColors: string[] = [
    'bg-violet-300',
    'bg-green-300',
    'bg-sky-300',
    'bg-amber-300',
    'bg-emerald-300',
    'bg-rose-300',
  ];
  let bgIndex = 0;
  const handleNewColor = () => {
    const randomColor = bgColors[bgIndex];
    bgIndex = (bgIndex + 1) % bgColors.length;
    return randomColor;
  };

  return (
    <div id="workContent" className="flex flex-col items-center justify-center w-[90%] sm:w-[60%] space-y-16 sm:space-y-20">
      {Works.map((work, index) => (
        <div
          key={index}
          id={`work-${index}`}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-3 scroll-my-24"
        >
          <div className="bg-beightDark w-[450px] h-[300px] rounded-3xl items-center justify-center flex">
            {work.image}
          </div>
          <p className="text-xl font-bold pt-5">{work.name}</p>
          <div className="flex flex-row space-x-3 text-sm">
            {work.skill.map(skill => (
              <div
                className={`font-bold drop-shadow-sm shadow-black+ h-[35px]flex items-center justify-center p-2 rounded-xl ${handleNewColor()}`}
              >
                {skill}
              </div>
            ))}
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
