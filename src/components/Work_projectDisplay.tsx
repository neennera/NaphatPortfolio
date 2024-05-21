import WorksData from '../assets/WorksData.json';
import Tiger from '../assets/image/work/Tiger.png';
import CPmon from '../assets/image/work/CPmon.png';
import GIBBIN from '../assets/image/work/GIBBIN.png';
import AIBuilder from '../assets/image/work/AIBuilder.png';
import Todo from '../assets/image/work/Todo.png';
import TOI18 from '../assets/image/work/TOI18.png';
import Witch from '../assets/image/work/Witch.png';

type ImageMap = {
  Tiger?: string;
  CPmon?: string;
  GIBBIN?: string;
  AIBuilder?: string;
  Todo?: string;
  TOI18?: string;
  Witch?: string;
};

const images: ImageMap = {
  Tiger: Tiger,
  CPmon: CPmon,
  GIBBIN: GIBBIN,
  AIBuilder: AIBuilder,
  Todo: Todo,
  TOI18: TOI18,
  Witch: Witch,
};

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
    <div
      id="workContent"
      className="flex flex-col items-center justify-center w-full sm:w-[60%] space-y-16 sm:space-y-20"
    >
      <p className="block sm:hidden text-5xl font-bold ">Works</p>

      {Works.map((work, index) => (
        <div
          key={index}
          id={`work-${index}`}
          className="flex flex-col pb-20 items-center justify-center space-y-4 sm:space-y-3 scroll-my-24"
        >
          <div className="w-[85vw] sm:w-[550px] h-[300px] rounded-3xl items-center justify-center flex">
            <img
              src={images[work.image as keyof ImageMap]}
              className="z-2 h-full object-cover rounded-md drop-shadow-xl"
            />
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

          <a href={work.link} target="_blank">
            <button className="border border-dark py-2 px-20 rounded-md text-md font-bold hover:bg-dark hover:text-white">
              Learn More...
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Work_projectDisplay;
