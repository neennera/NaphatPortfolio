import { useEffect } from 'react';
import Work_projectDisplay from './Work_projectDisplay';
import Work_projectName from './Work_projectName';

const Work = () => {
  useEffect(() => {
    const sidebar = document.getElementById('workSidebar');
    const content = document.getElementById('workContent');
    const experience = document.getElementById('experience');

    window.onscroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const contentHeight = content?.getBoundingClientRect().height || 0;
      const sidebarHeight = sidebar?.getBoundingClientRect().height || 0;
      const contentTop = content?.getBoundingClientRect().top || 0;
      const experienceTop = experience?.getBoundingClientRect().top || 0;

      if (sidebar != null) {
        if (
          scrollTop >= contentTop + viewportHeight + sidebarHeight &&
          scrollTop <=
            experienceTop + viewportHeight + contentHeight - sidebarHeight / 5
        ) {
          sidebar.style.position = 'sticky';
          sidebar.style.top = '12vh';
        } else {
          sidebar.style.position = '';
          sidebar.style.top = '';
        }
      }
    };
  }, []);
  return (
    <div
      id="works"
      className="flex text-white scroll-my-10 py-[4vw] flex-col sm:flex-row w-full lg:section-min-height items-start justify-between p-10 space-y-5"
    >
      <Work_projectName />
      <Work_projectDisplay />
    </div>
  );
};

export default Work;
