import React from "react";
import { motion, useScroll } from "framer-motion";



export default function fadeLetter({ letter, duration }){

  const {scrollYProgress}=useScroll();
  if(scrollYProgress==0){
    console.log("At top")
  }
  return(
    <>
      <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:`${duration}`}}
          >{letter}</motion.div>
    </>
  );
}
