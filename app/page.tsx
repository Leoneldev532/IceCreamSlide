// @ts-nocheck
"use client"
import Image from "next/image";
import imggreen1 from "@/public/1.png"
import imggreen2 from "@/public/2.png"
import imggreen3 from "@/public/3.png"
import imggreen4 from "@/public/4.png"
import imggreen5 from "@/public/5.png"


import imgorange1 from "@/public/or1.png"
import imgorange2 from "@/public/or2.png"
import imgorange3 from "@/public/or3.png"
import imgorange4 from "@/public/or4.png"
import imgorangefeuille from "@/public/pngegg 4.png"
import imgorange5 from "@/public/or5.png"
import imgorange6 from "@/public/pngwing 2.png"
import imgorange7 from "@/public/pngwing 3.png"
import imgorange8 from "@/public/pngegg 4.png"


import imgorose1 from "@/public/pngwing 7.png"
import imgorose2 from "@/public/pngwing 8.png"
import imgorose3 from "@/public/pngwing 9.png"
import imgorose4 from "@/public/pngwing 10.png"
import imgorose5 from "@/public/pngegg 11.png"
import imgorose6 from "@/public/pngegg 4.png"
import imgorose7 from "@/public/pngwing 11.png"
import imgorose8 from "@/public/pngegg 2.png"
import imggreen23 from "@/public/25.png"
import ombre from "@/public/ombre.png"
import badge1 from "@/public/mask1.png"
import badge2 from "@/public/mask2.png"
import badge3 from "@/public/mask3.png"

import bottle from "@/public/beer bottle.png"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Home() {

  const [state,setState] = useState({
    isActive1:true,
    isActive2:false,
    isActive3:false
  })

  const tl = gsap.timeline()

  

  const parent = useRef(null)
  const elem1 = useRef(null)
  const elem2 = useRef(null)
  const elem3 = useRef(null)

  const el1 = useRef(null)
  const el2 = useRef(null)
  const el3 = useRef(null)

  const table = gsap.utils.toArray(".ibeer2")

  const Next = ()=>{

    if(parent.current?.children[0].classList.contains("active")){


        tl.to(elem1.current,{
          y:"-110%",
          ease: "power3.inOut",
          duration:0.5,
          rotate:360
        },'<').to(elem2.current,{
          y:"-100%",
          ease: "power3.inOut"
         
        },'<').to(el1.current,{
          x:"-100%",
          ease: "power3.Out",
          transformOrigin: "50%  50%"
          
        },'-=0.9').to(el2.current,{
          x:"-100%",
          ease: "power3.inOut",
          transformOrigin: "50%  50%"
         
          
        },'<').to(parent.current,{
          background:"radial-gradient(circle at center,rgba(168, 31, 31, 0.2)  2% ,#FFA31E)",
          ease: "power3.inOut"
        },'<')
        setState({ isActive1:false,
          isActive2:true,
          isActive3:false})
    }


    if(parent.current?.children[1].classList.contains("active")){

      tl.to(elem2.current,{
        y:"-200%",
      },'<').to(elem3.current,{
        y:"-200%",
      },'<').to(el2.current,{
        x:"-100%",
      },'-=1.2').to(el3.current,{
        x:"-200%",
      },'<').to(parent.current,{
        background:"radial-gradient(circle at center,rgba(168, 31, 31, 0.2)  2% ,#A5F948)",
      },'<')

      setState({ isActive1:false,
        isActive2:false,
        isActive3:true})

  }

  }


  const prev = () => {
    if (parent.current?.children[2].classList.contains("active")) {
      tl.to(elem3.current, {
        y: "-100%",
        ease: "power3.inOut",
        duration:  0.5,
        rotate:  360
      }, '<').to(elem2.current, {
        y: "-100%",
        ease: "power3.inOut"
      }, '<').to(el3.current, {
        x: "-100%",
        ease: "power3.Out",
        transformOrigin: "50%   50%"
      }, '-=0.9').to(el2.current, {
        x: "-100%",
        ease: "power3.inOut",
        transformOrigin: "50%   50%"
      }, '<').to(parent.current, {
        background: "radial-gradient(circle at center,rgba(168, 31, 31, 0.2)  2% ,#FFA31E)",
        ease: "power3.inOut"
      }, '<')
  
      setState({ isActive1:false , isActive2: true, isActive3: false });
    }
  
    if (parent.current?.children[1].classList.contains("active")) {
      tl.to(parent.current, {
        background: "radial-gradient(circle at center,rgba(168, 31, 31, 0.2)  2% ,#FF3D6C)",
      }, "<").to(el2.current, {
        x: "0%",
        transformOrigin: "50%   50%"
      },   "-=1.2").to(el1.current, {
        x: "0%",
        transformOrigin: "50%   50%"
      },"<").to(elem2.current, {
        y: "0%",
      },  "<").to(elem1.current, {
        y: "0%",
        rotate:  0
      }, "<");
      setState({ isActive1: true, isActive2: false, isActive3: false });
    }
  }
  
  

  // bg-[#FF3D6C]
  // bg-[#FFA31E]
  // bg-[#A5F948]

  return (
    <main ref={parent} className="flex max-h-screen  bgop overflow-hidden flex-col items-center justify-between">
      <div className={`min-h-screen relative  w-full ${state.isActive1 ? "active" : null } `}>
        <div className="absolute  z-20 flex justify-center items-center w-full h-full">



          <Image  src={bottle} className="bouteille object-contain z-20 h-[50rem] w-[50rem] " alt="bouteille" />
          <Image  src={ombre} className="absolute z-0 object-contain top-[73%] " alt="ombre" />

        </div>

        <div className="absolute    z-30  w-[17rem] h-[420px] flex overflow-hidden justify-start top-[23%] left-[41.25%] items-center ">
        
        <Image  ref={el1}  src={badge2} className="beercan  h-[550px]  w-[50.30rem]  z-0 object-cover object-top   " alt="ombre" />
        <Image ref={el2}  src={badge1} className="beercan h-[550px]  w-[50.30rem]  z-0 object-cover object-top  " alt="ombre" />
         <Image ref={el3}  src={badge3} className="beercan h-[550px]  w-[51rem]  z-0 object-cover object-top  " alt="ombre" />
    
        </div>

          <div className="absolute  z-0  w-full h-full flex justify-center items-center">

          {state.isActive1 ? 
            <h2 className="text-9xl font-extrabold tracking-widest">STRAWBERRY </h2> : null  }
                 {state.isActive2 ? 
            <h2 className="text-9xl font-extrabold tracking-widest">ORANGE</h2> : null  }
               {state.isActive3 ? 
            <h2 className="text-9xl font-extrabold tracking-widest">APPLE</h2> : null  }
        </div>
        <div ref={elem1} className="absolute z-0 elem1  w-full h-full">
      <Image src={imgorose4} alt="pomme 1"  className="absolute ibeer1  h-56 w-56 object-contain left-[85%] top-[5%] "/>
        <Image src={imgorose5} alt="pomme 1"  className="absolute  ibeer1 h-48 w-48 object-contain left-[20%] top-[10%] "/>
        <Image src={imgorose2} alt="pomme 1"  className="absolute ibeer1  h-64 w-64 object-contain -left-[3%] top-[40%] "/>
        <Image src={imgorose7} alt="pomme 1"  className="absolute ibeer1  h-56 w-56 object-contain left-[40%] top-[80%] "/>
        <Image src={imgorose1} alt="pomme 1"  className="absolute ibeer1  h-64 w-64 object-contain left-[80%] top-[60%] "/>
        <Image src={imgorose8} alt="pomme 1"  className="absolute ibeer1  h-64 w-64 object-contain left-[50%] top-[8%] "/>
   
      </div>  
      <div className="fixed z-40 flex gap-x-4 justify-center items-end py-4 w-full h-full">
          
          <button onClick={()=>prev()} className={` ${state.isActive1 ? "bg-black/10" :"bg-black/40" } text-white p-3 rounded-full cursor-pointer`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
</button>

  
<button onClick={()=>Next()} className={`bg-black/40 ${state.isActive3 ? "bg-black/10" :"bg-black/40" } text-white p-3 rounded-full cursor-pointer`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></button>


</div>
      </div> 

    
      <div className={`min-h-screen relative  w-full ${state.isActive2 ? "active" : null } `}>

      <div className="absolute   w-full h-full flex justify-center items-center">
            {/* <h2 className="text-9xl font-extrabold">ORANGE</h2> */}
        </div>

      <div ref={elem2} className="absolute elem2 z-10  w-full h-full">
      <Image src={imgorange1} alt="pomme 1"  className=" ibeer2 absolute h-64 w-64 object-contain left-[85%] top-[60%] "/> 
        <Image src={imgorange2} alt="pomme 1"  className=" ibeer2 absolute h-48 w-48 object-contain left-[57%] top-[70%] "/>
        <Image src={imgorange3} alt="pomme 1"  className=" ibeer2 absolute h-64 w-64 object-contain left-[18%] top-[60%] "/>
        <Image src={imgorange4} alt="pomme 1"  className=" ibeer2 absolute h-36 w-36 object-contain left-[40%] top-[80%] "/>
        <Image src={imgorangefeuille} alt="pomme 1"  className=" ibeer2 absolute h-36 w-36 object-contain left-[40%] top-[80%] "/>
        <Image src={imgorangefeuille} alt="pomme 1"  className=" ibeer2 absolute h-36 w-36 object-contain left-[50%] top-[0%] "/>
        <Image src={imgorange7} alt="pomme 1"  className=" ibeer2 absolute h-36 w-36 object-contain left-[70%] top-[10%] "/>
         <Image src={imgorange8} alt="pomme 1"  className=" ibeer2 absolute h-36 w-36 object-contain left-[5%] top-[0%] "/>
        <Image src={imgorange5} alt="pomme 1"  className=" ibeer2 absolute h-64 w-64 object-contain -left-[5%] top-[40%] "/>
        <Image src={imgorange6} alt="pomme 1"  className=" ibeer2 absolute h-64 w-64 object-contain left-[20%] -top-[8%] "/>
        {/* <Image src={imgorange7} alt="pomme 1"  className="absolute h-64 w-64 object-contain left-[55%] top-[70%] "/> */}
      </div>  
      </div>  
      <div className={`min-h-screen relative  w-full ${state.isActive3 ? "active" : null } `}>
      <div className="absolute    w-full h-full flex justify-center items-center">
            {/* <h2 className="text-9xl font-extrabold">POMME</h2> */}
        </div>
      <div ref={elem3} className="absolute elem3 z-10   w-full h-full">
        <Image src={imggreen1} alt="pomme 1"  className="absolute h-36 w-36 object-contain left-[45%] -top-[3%] "/>
        <Image src={imggreen2} alt="pomme 1"  className="absolute h-48 w-48 object-contain left-[20%] top-[10%] "/>
        <Image src={imggreen23} alt="pomme 1"  className="absolute h-48 w-48 object-contain left-[80%] top-[10%] "/>
        <Image src={imggreen3} alt="pomme 1"  className="absolute h-64 w-64 object-contain -left-[3%] top-[40%] "/>
        <Image src={imggreen4} alt="pomme 1"  className="absolute h-36 w-36 object-contain left-[40%] top-[80%] "/>
        <Image src={imggreen5} alt="pomme 1"  className="absolute h-64 w-64 object-contain left-[80%] top-[60%] "/>
      </div>  
      </div> 
    </main>
  );
}
