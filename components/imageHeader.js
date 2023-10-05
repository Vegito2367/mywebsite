import React from "react";
import commonstyles from "@/styles/commonstyles.module.css"
import { motion } from "framer-motion";
export default function ImageHeader({word})
{

   
      return(
        <>
          <motion.div className={commonstyles.whatifuare}>
            What if you are <motion.span
            key={word} 
            initial={{x:1000,opacity:0.2}}
            animate={{x:0,opacity:1.0}}
            transition={{duration:1.5}}>{word}</motion.span>
          </motion.div>
        </>
      );
    }
