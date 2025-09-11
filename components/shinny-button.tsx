"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { inter } from "@/lib/font";
import { CircleArrowRight } from "lucide-react";

export default function ShinnyButton() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 85,
        delay: 0.25,
      }}
    >
      <Button className="p-6 rounded-[15px] border-4 border-[#2F2F30]/20 bg-[#cf7807] hover:bg-[#cf7807]cursor-pointer group duration-500 inset-shadow-sm inset-shadow-white/50">
        <p className={`${inter.className} font-bold text-lg text-white`}>
          Get Started for Free
        </p>

        <CircleArrowRight
          className="size-6 group-hover:translate-x-2 transition-transform"
          color="white"
        />
      </Button>
    </motion.div>
  );
}
