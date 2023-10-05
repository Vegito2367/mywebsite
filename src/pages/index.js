import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import commonstyles from "../styles/commonstyles.module.css";

import FadeLetter from "../../components/fadeLetter";
import FadeTextBlock from "../../components/fadeTextBlock";
import UseCaseFade from "../../components/useCaseFade";
import ImageHeader from "../../components/imageHeader";
export default function Home() {
  
  const blockOftext="Lorem ipsum dolor sit amet. Aut natus eius et odio internos et velit libero. Et sint nostrum qui soluta illum ut voluptas facilis et molestiae maxime aut dolores alias qui quam magni. Cum deleniti atque et vitae explicabo id quas temporibus cum placeat dolor.Non beatae voluptas ut nihil magnam qui dolorem error! Est assumenda odit est voluptatem expedita et possimus voluptate hic magni ullam. Ab provident asperiores id porro voluptas ut omnis labore non consectetur galisum qui illo cumque rem nisi deleniti ab quos tempora. Et repellendus fuga sed omnis voluptas qui sunt quibusdam aut tempore tempore rem ipsa necessitatibus At dolorem vero. At quia doloribus hic magnam perferendis et recusandae molestias aut nisi labore aut reiciendis sint qui recusandae blanditiis qui ipsam explicabo? Ea unde possimus et illum animi et enim repellat ab sequi tenetur non velit iste est laboriosam fuga ab exercitationem veniam!"

  const bgColor="#F5F5F5";
  

  
  return (
    <>
      <div style={{paddingBottom:"700px",backgroundColor:`${bgColor}`, paddingTop:"200px",zIndex:"-1000"}}>
        <motion.div className={commonstyles.Header}>
          <FadeLetter letter="W" duration={0.5}/>
          <FadeLetter letter="E" duration={0.9}/>
          <FadeLetter letter="L" duration={1.3}/>
          <FadeLetter letter="C" duration={1.7}/>
          <FadeLetter letter="O" duration={2.1}/>
          <FadeLetter letter="M" duration={2.5}/>
          <FadeLetter letter="E" duration={2.9}/>
        </motion.div>


        
        <FadeTextBlock textblock={blockOftext} depth={400}/>
        <motion.div className={commonstyles.butwhy}
        initial={{y:200,opacity:0.2}}
        whileInView={{y:0,opacity:1.0}}
        transition={{duration:1.5}}
        >
          
            BUT WHY?
          </motion.div>


        <UseCaseFade/>


      </div>
        
    </>
  );
}
