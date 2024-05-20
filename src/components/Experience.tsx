import Experience_Card from './Experience_Card';

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex scroll-my-10 flex-col w-full section-min-height items-start justify-start p-10 space-y-10"
    >
      <p className="text-5xl font-bold">Experience</p>
      <Experience_Card />
    </div>
  );
};

export default Experience;
