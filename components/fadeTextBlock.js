import React from "react";
import commonstyles from "@/styles/commonstyles.module.css"
import { motion } from "framer-motion";

export default function fadeTextBlock({textblock, depth}){
  return(
    <>
      <motion.div 
      initial={{y:depth,opacity:0.2}}
      whileInView={{y:0,opacity:1.0}}
      transition={{duration:1.5}}
      className={commonstyles.fadeText}>
        {textblock}
      </motion.div>
    </>
  );

};