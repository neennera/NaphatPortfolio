import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ExperienceData from '../assets/ExperienceData.json';
interface ItemInterface {
  id: number;
  subtitle: string;
  title: string;
  info: string;
  width: string;
}

const Experience_Card = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const items: ItemInterface[] = ExperienceData;
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="relative sm:absolute w-[95%] pt-8">
      {/* all exp card*/}
      <div className="relative sm:absolute flex flex-wrap sm:px-6 justify-center">
        {items.map(item => (
          <motion.div
            className={`h-[25vh] rounded bg-beight p-3 my-2 sm:m-2 ${item.width}`}
            layoutId={item.id.toString()}
            onClick={() => setSelectedId(item.id)}
          >
            <motion.h2 className="text-md sm:text-xl font-semibold">
              {item.title}
            </motion.h2>
            <motion.h5 className="text-sm sm:text-lg">
              {item.subtitle}
            </motion.h5>
          </motion.div>
        ))}
      </div>

      {/* blury background */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <div className="hidden sm:block sm:absolute backdrop-blur-sm w-full h-[60vh] t-0 l-0"></div>
        )}
      </AnimatePresence>
      {/* card on display */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <motion.div
            className="hidden sm:absolute  bg-beightDark rounded-md  w-[60vw] md:h-[40vh] sm:flex flex-row justify-between left-[15%] top-[300%] p-8"
            layoutId={selectedId.toString()}
          >
            <div>
              <motion.h2 className="text-xl font-semibold">
                {selectedItem.title}
              </motion.h2>
              <motion.h5>{selectedItem.info}</motion.h5>
            </div>

            <motion.button
              className="bg-primary w-8 h-8 hover:text-white"
              onClick={() => setSelectedId(null)}
            >
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience_Card;
