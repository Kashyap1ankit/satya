"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoMdAlarm } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";
import { BiCopy, BiSolidZap } from "react-icons/bi";
import { GoZap } from "react-icons/go";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { motion } from "motion/react";
import { brig, inter, plus } from "@/lib/font";

export default function PersonalCard() {
  const [tap, setTap] = useState(false);

  function handleTap() {
    setTap(true);
    const timer = setTimeout(() => {
      setTap(false);
    }, 1500);

    return () => clearTimeout(timer);
  }

  return (
    <motion.div
      className="bg-green w-full max-w-[550px] sm:w-[500px] md:w-[550px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] flex flex-col gap-y-2 sm:gap-y-3 pb-2 sm:pb-3 border border-[#a8d96f] inset-shadow-sm inset-shadow-indigo-500"
      initial={{ y: 50, opacity: 0, filter: "blur(15px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 5,
        stiffness: 75,
      }}
    >
      {/* upper part  */}
      <div className="bg-primaryBg p-4 sm:p-6 md:p-8 w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 z-20 shadow-lg/30">
        {/* upper part  */}
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-x-2">
            <div className="bg-green w-2 h-2 rounded-full" />
            <p className={`text-gray text-xs sm:text-sm ${inter.className}`}>
              Available for work
            </p>
          </div>

          <div className="flex items-center justify-start gap-x-1">
            <IoMdAlarm color="#7b7e7b" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className={`text-gray text-xs sm:text-sm ${inter.className}`}>
              7:15PM
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-start gap-x-3 sm:gap-x-4 items-center">
          <Image
            width={200}
            height={200}
            alt="my-image"
            src={"/me.png"}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex-shrink-0"
          />

          <div className="min-w-0 flex-1">
            <p
              className={`text-lg sm:text-xl text-white ${plus.className} tracking-wide truncate`}
            >
              Ankit Kashyap
            </p>
            <p
              className={`text-text font-medium text-sm ${inter.className} tracking-wide`}
            >
              Fullstack Dev
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-x-4 px-1 sm:px-2">
          <Button
            className="bg-[#454545] rounded-xl inset-shadow-sm inset-shadow-white/10 flex-1 cursor-pointer py-4 sm:py-6 min-h-[48px]"
            size={"lg"}
          >
            <BsPlusCircle color="white" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className={`text-sm sm:text-md text-white ${plus.className}`}>
              Hire Me
            </p>
          </Button>

          <Button
            className="bg-[#2F2F2F] rounded-xl inset-shadow-sm inset-shadow-white/10 flex-1 cursor-pointer py-4 sm:py-6 duration-500 min-h-[48px]"
            size={"lg"}
            onClick={handleTap}
          >
            {tap ? (
              <TiTick color="#00c950" className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <BiCopy color="white" className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
            {tap ? (
              <p
                className={`text-sm sm:text-md text-[#00c950] ${plus.className}`}
              >
                Copied
              </p>
            ) : (
              <p className={`text-sm sm:text-md text-white ${plus.className}`}>
                Copy Email
              </p>
            )}
          </Button>
        </div>
      </div>

      {/* bottom part  */}
      <div className="w-full mx-auto px-2">
        <div className="flex flex-row justify-center items-center gap-x-2">
          <GoZap className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <p className={`${inter.className} text-xs sm:text-sm text-center`}>
            Currently High on Creativity
          </p>
        </div>
      </div>
    </motion.div>
  );
}
