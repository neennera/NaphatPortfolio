import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';
function App() {
  return (
    <main className="min-h-screen scroll-smooth w-full bg-white font-sora text-dark flex flex-col space-y-5 justify-center items-center">
      <Navbar />
      <Hero />
      <hr className="h-px my-8 w-[80%] bg-gray-200 border-0 dark:bg-gray-700" />
      <AboutMe />
      <hr className="h-px my-8 w-[80%] bg-gray-200 border-0 dark:bg-gray-700" />
      <Work />
      <hr className="h-px my-8 w-[80%] bg-gray-200 border-0 dark:bg-gray-700" />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
