import React from "react";
import commonstyles from "@/styles/commonstyles.module.css"
import { motion } from "framer-motion";
import Image from "next/image";

export default function imageHolder({color,src})
{
  return(
    <>
      <motion.div 
      initial={{y:200,opacity:0.2}}
      whileInView={{y:0,opacity:1.0}}
      transition={{duration:0.75}}
      className={commonstyles.picbox}>
         <motion.img
         initial={{y:300,opacity:0.2}}
         animate={{y:0,opacity:1.0}}
         src={src} style={{height:"100%"}}></motion.img>
        </motion.div>
    </>
    
  );
}