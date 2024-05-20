import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
interface ItemInterface {
  id: number;
  subtitle: string;
  title: string;
  info: string;
}

const Experience_Card = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const items: ItemInterface[] = [
    {
      id: 0,
      subtitle: 'Head of Integral Bee Challenge 2024',
      title: 'Head of Integral Bee',
      info: 'I work at this project',
    },
    {
      id: 1,
      subtitle: 'AAAAAA',
      title: 'BBBB',
      info: 'CCCCCCCCCCC',
    },
  ];
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="relative w-full pt-10 h-[100%]">
      {/* all exp card*/}
      <div className="absolute flex flex-row space-x-3 p-6">
        {items.map(item => (
          <motion.div
            className="w-[30vw] h-[10vh] rounded bg-beightDark"
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
          <div className="absolute backdrop-blur-sm w-full h-[60vh] t-0 l-0"></div>
        )}
      </AnimatePresence>
      {/* card on display */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <motion.div
            className="bg-beightDark rounded-md absolute w-[60vw] h-[40vh] flex flex-row justify-between left-[15%] top-[180%] p-8"
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
              {' '}
              X{' '}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience_Card;
