import WorksData from '../assets/WorksData.json';

interface WorksInterface {
  name: string;
  skill: Array<string>;
  image: string;
  desc: string;
  link: string;
}

const Work_projectName = () => {
  const Works: WorksInterface[] = WorksData;
  return (
    <div id="workSidebar" className="hidden w-[40%] sm:block space-y-5">
      <p className="text-5xl font-bold ">Works</p>
      {Works.map((work, index) => (
        <div key={index} className="text-lg ml-8 ">
          <a href={`#work-${index}`}>{work.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Work_projectName;
