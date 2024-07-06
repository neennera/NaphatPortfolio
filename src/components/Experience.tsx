import Experience_Card from './Experience_Card';

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex scroll-my-10 min-h-[95vh]  flex-col w-full items-start justify-start p-10 space-y-10"
    >
      <div className="flex flex-col sm:flex-row space-x-4 items-end space-y-3">
        <p className="text-5xl font-bold">Experience</p>
        <p className="text-lg text-primary font-semibold">
          Click at card to see more
        </p>
      </div>

      <Experience_Card />
    </div>
  );
};

export default Experience;
