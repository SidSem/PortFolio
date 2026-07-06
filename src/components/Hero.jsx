import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start gap-5 z-20 pointer-events-none`}
      >
        <div className='flex-col justify-center items-center mt-5 hidden sm:flex'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='pointer-events-auto flex flex-col items-center sm:items-start text-center sm:text-left'>
          <motion.p
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-secondary sm:text-[18px] text-[14px] font-medium uppercase tracking-[0.2em] mb-3'
          >
            Hello, welcome to my portfolio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <h1 className='font-black text-white text-[32px] xs:text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] leading-[1.2] lg:leading-[98px] mt-2'>
              Hi, I'm <span className='text-[#915EFF]'>Siddharth Semwal</span>
            </h1>
            <p className='text-[#dfd9ff] font-medium text-[15px] xs:text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-[1.4] lg:leading-[40px] mt-2 text-white-100'>
              B.Tech CSE Student | Aspiring Software Developer{" "}
              <br className='sm:block hidden' />
              based in Uttarakhand, India
            </p>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-auto'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
