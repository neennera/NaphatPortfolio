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
    <div className="hidden sm:block">
      {Works.map((work, index) => (
        <p key={index}>{work.name}</p>
      ))}
    </div>
  );
};

export default Work_projectName;
