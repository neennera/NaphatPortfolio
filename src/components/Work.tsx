import Work_projectDisplay from './Work_projectDisplay';
import Work_projectName from './Work_projectName';

const Work = () => {
  return (
    <div
      id="works"
      className="flex scroll-my-10 py-[4vw] flex-col sm:flex-row w-full lg:section-min-height items-start justify-between p-10 space-y-"
    >
      <div className="space-y-10">
        <p className="text-5xl font-bold">Works</p>
        <Work_projectName />
      </div>
      <Work_projectDisplay />
    </div>
  );
};

export default Work;
