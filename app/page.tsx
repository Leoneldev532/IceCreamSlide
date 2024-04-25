// @ts-nocheck
"use client";
import im1 from "@/public/1.png";
import im2 from "@/public/2.png";
import im3 from "@/public/3.png";
import im4 from "@/public/4.png";
import im5 from "@/public/5.png";
import im6 from "@/public/6.png";
import im7 from "@/public/7.png";
import im8 from "@/public/9.png";
import gsap from "gsap";
import Header from "./components/header"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import im9 from "@/public/9.png"
const Page = () => {
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  });

  const im12 = useRef(null);
  const im22 = useRef(null);
  const im32 = useRef(null);
  const im42 = useRef(null);

  const btn1 = useRef(null);
  const btn2 = useRef(null);
  const btn3 = useRef(null);
  const btn4 = useRef(null);

  const tl = gsap.timeline();
  // useEffect(()=>{

  useEffect(() => {
    const handleClick1 = () => {
      setState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
        isActive4: false,
      });

      if (im12.current?.classList.contains("active")) {
        tl.to(".elem2,.elem3,.elem4", {
          y: 700,
          // duration: 0.1,
          ease: "sine.inOut",
        })
          .to(
            ".elem2,.elem3,.elem4",
            {
              autoAlpha: 0,
            },
            "-=0.22"
          )
          .fromTo(
            im12.current,
            {
              autoAlpha: 0,
              y: 450,
              duration: 0.4,
            },
            {
              autoAlpha: 1,
              ease: "sine.inOut",
              y: 0,
            },
            "-=0.4"
          )
          .to(
            ".parent",
            {
              background: "linear-gradient(to right, #be1241 , #eb3d6c 50%)",
            },
            "<"
          );
      }
    };

    const handleClick2 = () => {
      setState({
        isActive1: false,
        isActive2: true,
        isActive3: false,
        isActive4: false,
      });

      if (im22.current?.classList.contains("active")) {
        tl.to(".elem1,.elem3,.elem4", {
          y: 700,
          // duration: 0.1,
          ease: "sine.inOut",
        })
          .to(
            ".elem1,.elem3,.elem4",
            {
              autoAlpha: 0,
            },
            "-=0.22"
          )
          .fromTo(
            im22.current,
            {
              autoAlpha: 0,
              y: 450,
              duration: 0.4,
            },
            {
              autoAlpha: 1,
              ease: "sine.inOut",
              y: 0,
            },
            "-=0.4"
          )
          .to(
            ".parent",
            {
              background: "linear-gradient(to right, #236CDA ,#478DF6  50%)",
            },
            "<"
          );
      }
    };

    const handleClick3 = () => {
      setState({
        isActive1: false,
        isActive2: false,
        isActive3: true,
        isActive4: false,
      });

      if (im32.current?.classList.contains("active")) {
        tl.to(".elem2,.elem1,.elem4", {
          y: 700,
          // duration: 0.1,
          ease: "sine.inOut",
        })
          .to(
            ".elem2,.elem1,.elem4",
            {
              autoAlpha: 0,
            },
            "-=0.22"
          )
          .fromTo(
            im32.current,
            {
              autoAlpha: 0,
              y: 450,
              duration: 0.4,
            },
            {
              autoAlpha: 1,
              ease: "sine.inOut",
              y: 0,
            },
            "-=0.4"
          )
          .to(
            ".parent",
            {
              background: "linear-gradient(to right,#A06D55 ,#E0BDB0 50%)",
            },
            "<"
          );
      }
    };

    const handleClick4 = () => {
      setState({
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: true,
      });

      if (im42.current?.classList.contains("active")) {
        tl.to(".elem2,.elem3,.elem1", {
          y: 700,
          // duration: 0.1,
          ease: "sine.inOut",
        })
          .to(
            ".elem2,.elem3,.elem1",
            {
              autoAlpha: 0,
            },
            "-=0.22"
          )
          .fromTo(
            im42.current,
            {
              autoAlpha: 0,
              y: 450,
              duration: 0.4,
            },
            {
              autoAlpha: 1,
              ease: "sine.inOut",
              y: 0,
            },
            "-=0.4"
          )
          .to(
            ".parent",
            {
              background: "linear-gradient(to right,#2A9949 ,#47F66E 50%)",
            },
            "<"
          );
      }
    };

    btn1.current?.addEventListener("click", handleClick1);

    btn2.current?.addEventListener("click", handleClick2);
    btn3.current?.addEventListener("click", handleClick3);
    btn4.current?.addEventListener("click", handleClick4);

    // return () => {
    //   btn1.current?.removeEventListener("click", handleClick1);
    //   btn2.current?.removeEventListener("click", handleClick2);
    //   btn3.current?.removeEventListener("click", handleClick3);
    //   btn4.current?.removeEventListener("click", handleClick4);
    // };
  }, []);

  return (
    <div className="parent flex gap-x-4  bgop  min-h-screen overflow-hidden  py-36 px-8 min-[1450px]:px-36 ">
           <Header />
      <div className="w-1/2 flex  flex-col gap-y-4 ">
        <h1 className="xl:text-[10rem] text-[6rem] md:h-36 xl:h-48 p-0 m-0 ff ">
          ice cream
        </h1>
        <h3 className=" f2 font-extrabold md:text-[4rem] xl:text-7xl">
          Strawberry cone
        </h3>
        <span className="text-xl f2">
          Embark on a culinary journey of Delight as You Immerse Yourself in Our
          Artisan-Crafted Ice Cream Collection—Each Flavor a Story, Each Scoop
          an Unforgettable Chapter in Your Sweet Odyssey! Indulge in a World of
          Imagination, Where Every Scoop Unveils a New Taste Adventure! Choose
          your favorite
        </span>
        <div className="flex gap-x-8 justify-start items-center ">
          <div
            ref={btn1}
            className="  h-48 w-36 group  flex justify-end overflow-hidden items-center flex-col "
          >
            <div className="border-[2.5px] relative w-20 rounded-md h-16 border-white cursor-pointer  bg-white/20">
              <Image
                src={im4}
                alt="im1"
                className="absolute group-hover:rotate-12 ease-out group-hover:-translate-y-4  group-hover:scale-[1.8] duration-300 scale-150 object-contain -top-40 w-72  h-72 left-0"
              />
            </div>
          </div>

          <div
            ref={btn2}
            className=" h-48 w-36 group  flex justify-end overflow-hidden items-center flex-col "
          >
            <div className="border-[2.5px] relative w-20 rounded-md h-16 border-white cursor-pointer  bg-white/20">
              <Image
                src={im2}
                alt="im1"
                className="absolute group-hover:rotate-12 ease-out group-hover:-translate-y-4  group-hover:scale-[1.8] duration-300 scale-150 object-contain -top-40 w-72  h-72 left-0"
              />
            </div>
          </div>

          <div
            ref={btn3}
            className=" h-48 w-36 group  flex justify-end overflow-hidden items-center flex-col "
          >
            <div className="border-[2.5px] relative w-20 rounded-md h-16 border-white cursor-pointer  bg-white/20">
              <Image
                src={im1}
                alt="im1"
                className="absolute group-hover:rotate-12 ease-out group-hover:-translate-y-4  group-hover:scale-[1.8] duration-300 scale-150 object-contain -top-40 w-72  h-72 left-0"
              />
            </div>
          </div>

          <div
            ref={btn4}
            className=" h-48 w-36 group  flex justify-end overflow-hidden items-center flex-col "
          >
            <div className="border-[2.5px] relative w-20 rounded-md h-16 border-white cursor-pointer  bg-white/20">
              <Image
                src={im3}
                alt="im1"
                className="absolute group-hover:rotate-12 ease-out group-hover:-translate-y-4  group-hover:scale-[1.8] duration-300 scale-150 object-contain -top-40 w-72  h-72 left-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative flex justify-center items-center">
        <Image
          ref={im42}
          className={`elem4 h-full    scale-125 opacity-100 z-0 ${
            state.isActive4 ? "active" : null
          }  object-contain top-16 translate-x-20  absolute`}
          alt={"go"}
          src={im7}
        />
        <Image
          ref={im32}
          className={`elem3 h-full    scale-125 z-0 ${
            state.isActive3 ? "active" : null
          }   object-contain top-16 translate-x-20  absolute`}
          alt={"go"}
          src={im6}
        />
        <Image
          ref={im22}
          className={`elem2 h-full    scale-125 z-0  ${
            state.isActive2 ? "active" : null
          }   object-contain top-16 translate-x-20  absolute`}
          alt={"go"}
          src={im5}
        />
        <Image
          ref={im12}
          className={`elem1 h-full    scale-125 z-0 ${
            state.isActive1 ? "active" : null
          }   object-contain top-16 translate-x-20  absolute`}
          alt={"go"}
          src={im8}
        />
      </div>
    </div>
  );
};

export default Page;
