"use client";

import { brig, inter, manrope } from "@/lib/font";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkSquare01Icon,
  DashboardSquare03Icon,
  DashboardSquareSettingIcon,
  DashboardSquare01Icon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import { DotPattern } from "./ui/dot-pattern";
import { motion } from "motion/react";
import { useState } from "react";

const pricingArray = [
  {
    mainIcon: DashboardSquareSettingIcon,
    tag: null,
    name: "Basic",
    des: "Start with basic version",
    pricing: 20,
    included: [
      "100 Kodo credits/month",
      "10 AI image generations/month",
      "10 Magic Editor uses/month",
      "10 projects",
    ],
    scale: false,
  },

  {
    mainIcon: DashboardSquare01Icon,
    tag: "Most Popular",
    name: "Pro",
    des: "Start with most used pro version",
    pricing: 60,
    included: [
      "280 Kodo credits/month",
      "20 AI image generations/month",
      "20 Magic Editor uses/month",
      "50 projects",
    ],
    scale: true,
  },
  {
    mainIcon: DashboardSquare03Icon,
    tag: null,
    name: "Pro+",
    des: "Start with most entripe version",
    pricing: 200,
    included: [
      "1000 Kodo credits/month",
      "50 AI image generations/month",
      "50 Magic Editor uses/month",
      "Unlimited projects",
    ],
    scale: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#F8F7F4] w-full min-h-screen flex flex-col justify-center items-center gap-y-8 pb-12 pt-12">
      <div className="border border-neutral-400/20 rounded-full w-fit px-2 py-1 flex flex-row justify-between gap-x-2 items-center">
        <div className="w-1 h-1 bg-orange-600 rounded-full ring-3 ring-orange-800/50" />
        <p className={`${inter.className} text-xs`}>Pricing</p>
      </div>

      <p
        className={`${manrope.className} text-5xl font-semibold w-1/3 text-center`}
      >
        Flexible pricing plans for{" "}
        <span className="italic text-black/70">every need</span>
      </p>

      <p className={`${manrope.className} text-md font-semibold text-gray-600`}>
        Choose the plan that fits your needs. All plans include Kodo credits and
        AI features.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8 mt-6">
        {pricingArray.map((e, i) => {
          return <Card e={e} />;
        })}
      </div>
    </div>
  );
}

function Card({ e }: { e: any }) {
  const [hovered, setHovered] = useState(false);

  const textAnimate = {
    initial: {
      opacity: 1,
      y: 0,
    },

    hover: {
      opacity: 0,
      y: -8,
    },
  };

  const cartAnimate = {
    initial: {
      opacity: 0,
      y: -8,
    },

    hover: {
      opacity: 1,
      x: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 50, 100],
      y: [0, -4, 0, 4, 0, -4, 0, 4, 0, -4, 0, 4, -4, 0, 4, -4, 0, 4, 0],
    },
  };

  return (
    <div
      className={` ${
        e.scale ? "bg-white" : "bg-white/80"
      } rounded-3xl p-4 flex flex-col gap-y-6 min-w-[400px] ${
        e.scale ? "scale-110 shadow-sm" : ""
      }`}
    >
      <div className="relative flex flex-col gap-y-6">
        {e.scale && (
          <DotPattern
            className={
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
            }
          />
        )}
        <div className=" flex flex-row justify-between items-center">
          <HugeiconsIcon
            icon={e.mainIcon}
            stroke="1"
            color="white"
            fill="white"
            size={36}
            className="p-1 rounded-md bg-orange-400 border"
          />

          {e.tag && (
            <p
              className={`${manrope.className} font-medium text-xs rounded-full border border-orange-700  text-orange-700 bg-orange-200/60 px-4 py-1`}
            >
              {e.tag}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <p className={`${manrope.className} font-bold text-2xl`}>{e.name}</p>

          <p
            className={`${manrope.className} font-medium text-sm text-gray-500`}
          >
            {e.des}
          </p>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row items-end justify-start gap-x-2">
            <p className={`${brig.className} font-bold text-4xl`}>
              ${e.pricing}
            </p>
            <p
              className={`${manrope.className} font-medium text-sm text-gray-500`}
            >
              /mo
            </p>
          </div>

          <p
            className={`${manrope.className} font-normal text-xs text-gray-400`}
          >
            Pause and cancel any time
          </p>
        </div>
      </div>

      <div className="bg-[#F8F7F4] rounded-3xl p-4 border border-neutral-100 inset-shadow-sm inset-shadow-black/10 flex flex-col gap-y-2">
        {e.included.map((e: any, i: any) => {
          return (
            <div
              key={i}
              className="flex flex-row justify-start gap-x-2 items-center"
            >
              <HugeiconsIcon
                icon={CheckmarkSquare01Icon}
                stroke="1"
                color="white"
                fill="orange"
                size={16}
              />
              <p className={`${manrope.className} text-md`}>{e}</p>
            </div>
          );
        })}
      </div>

      <Button
        size={"lg"}
        className={`${
          e.scale ? "bg-orange-400" : "bg-orange-400/80"
        } rounded-full inset-shadow-sm inset-shadow-white/50 cursor-pointer group relative`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.p
          variants={textAnimate}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
          className={`${manrope.className} text-md font-bold text-white `}
        >
          Upgrade Plan
        </motion.p>

        <motion.div
          variants={cartAnimate}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
          transition={{
            duration: 2,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <HugeiconsIcon
            icon={ShoppingCart01Icon}
            stroke="2"
            color="white"
            fill="orange"
            size={52}
            className="size-6"
          />
        </motion.div>
      </Button>
    </div>
  );
}
