"use client";

import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import bookImage from "../assets/images/book-cover.png";
import HTMLIcon from "../assets/icons/html5.svg";
import CSSIcon from "../assets/icons/css3.svg";
import JSIcon from "../assets/icons/square-js.svg";
import ReactIcon from "../assets/icons/react.svg";
import GitHubIcon from "../assets/icons/github.svg";
import mapImage from "../assets/images/map.png";
import memojiSmile from "../assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "Javascript",
    iconType: JSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
];

const hobbies = [
  {
    title: "Viaggiare",
    emoji: "🌍",
    left: "25%",
    top: "35%",
  },
  {
    title: "Cucinare",
    emoji: "🍳",
    left: "50%",
    top: "5%",
  },
  {
    title: "Fotografia",
    emoji: "📸",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cinema",
    emoji: "🎬",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Musica",
    emoji: "🎵",
    left: "30%",
    top: "65%",
  },
  {
    title: "Lettura",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className='pb-20 lg:py-28'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='Chi sono?'
          description='Scopri di più su di me'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
            <Card className='h-[320px] md:col-span-2'>
              <CardHeader
                title='Le mie letture'
                description='I libri che mi hanno aiutato nella vita'
                className='px-6 pt-6'
              />
              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <Image
                  src={bookImage}
                  alt='Book cover'
                />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3'>
              <CardHeader
                title='I miei Tools'
                description='Le tecnologie che uso nei miei progetti'
              />
              <ToolboxItems
                items={toolboxItems}
                className=''
                itemsWrapperClassName='animate-move-left [animation-duration:30s]'
              />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperClassName='animate-move-right [animation-duration:30s]'
              />
            </Card>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-5'>
              <CardHeader
                title='Dietro il mio codice'
                description='Scopri chi sono al di fuori del lavoro'
                className='px-6 pt-6'
              />
              <div
                className='relative flex-1'
                ref={constraintRef}
              >
                {hobbies.map((item, index) => (
                  <motion.div
                    key={index}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-full py-1.5 absolute'
                    style={{ left: item.left, top: item.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className='font-medium text-gray-950'>
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-5'>
              <Image
                src={mapImage}
                alt='Map'
                className='h-full w-full object-cover object-left-top'
              />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[] after:absolute after:inset-0 after:outline after:outline-2 after:-outlet-offset-2 after:rounded-full after:outline-gray-950/30'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-300 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-300 -z-10'></div>

                <Image
                  src={memojiSmile}
                  alt='Memoji smile'
                  className='size-20'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
