import { motion } from "framer-motion";
import React, { useState } from "react";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import commonstyles from "@/styles/commonstyles.module.css"
import ImageHeader from "./imageHeader";
import ImageHolder from "./imageHolder";
import { useEffect } from "react";

export default function useCaseFade(){
  
  const reference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["end end", "start start"]
  });

  const [yprog,newProg]=useState(scrollYProgress.get())
  const [value,setValue]=useState(0)
  
  let wordarray=["an artist?"," a creator?","an environmentalist?","an environmentalist?"]
  useEffect(() => {
    // Check if we're running in the client-side context (browser)
    if (typeof window !== "undefined") {
      window.onscroll = function displayScroll() {
        newProg(scrollYProgress.get());
      };
    }
  }, []);
  
  return(
    <>
      
      <div ref={reference} style={{marginBottom:"200px"}}>
        <ImageHeader word={wordarray[Math.floor(((100-(yprog*100))/33))]}/>
        
      <div>
      
        <ImageHolder  src="/hero.png"/>
        <ImageHolder  src="/hero.png"/>
        <ImageHolder src="/hero.png"/>
        
      </div>
        
      </div> 

    </>
  );
}