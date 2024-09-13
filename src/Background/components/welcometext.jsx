import ExampleComponent from "./typewriter";
import { motion } from 'framer-motion';
export default function Welcomtext() {
  return (
    <div className="grid grid-cols-1 justify-items-center content-center font-montserrat ">
      <h3 className="font-medium xl:text-xl">WELCOME</h3>
      <ExampleComponent />
      <p className=" text-center pb-2 p-2 text-sm lg:text-md ">
        It is a long established fact that a reader will be of a page when
        established fact looking at its layout.
      </p>
      <button className="rounded-full border-2 bg-transparent font-semibold py-2 my-4 px-4">
        DOWNLOAD CV
      </button>
      <div className="flex justify-center items-center pt-5">
      <motion.img
        src="mouse-svgrepo-com.svg"
        alt="Mouse Icon"
        className="w-12"
        initial={{ y: 0 }}
        animate={{ y: [0, -30, 0] }} // Bounce effect
        transition={{ 
          duration: 1.5,
          repeat: Infinity, 
          repeatType: 'loop', 
          ease: 'easeInOut'
        }}
      />
    </div>
    </div>
  );
}
