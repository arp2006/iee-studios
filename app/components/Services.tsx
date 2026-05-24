"use client";

import { useState } from "react";

interface Service {
  icon: string;
  label: string;
  desc: string;
  tag: string;
  iconColor: string;
  bgColor: string;
  tagColor: string;
  tagBg: string;
}

const services: Service[] = [
  {
    icon: "✦",
    label: "Ideation",
    desc: "Concept development and early-stage creative exploration.",
    tag: "Strategy",
    iconColor: "#185FA5",
    bgColor: "#E6F1FB",
    tagColor: "#0C447C",
    tagBg: "#E6F1FB",
  },
  {
    icon: "◈",
    label: "Creative Direction",
    desc: "Visual systems and direction that shape the final piece.",
    tag: "Direction",
    iconColor: "#993556",
    bgColor: "#FBEAF0",
    tagColor: "#72243E",
    tagBg: "#FBEAF0",
  },
  {
    icon: "✎",
    label: "Scripting",
    desc: "Narratives and messaging crafted for clarity and emotion.",
    tag: "Writing",
    iconColor: "#854F0B",
    bgColor: "#FAEEDA",
    tagColor: "#633806",
    tagBg: "#FAEEDA",
  },
  {
    icon: "⬒",
    label: "Moodboards",
    desc: "Reference worlds built to establish tone and atmosphere.",
    tag: "Visuals",
    iconColor: "#534AB7",
    bgColor: "#EEEDFE",
    tagColor: "#3C3489",
    tagBg: "#EEEDFE",
  },
  {
    icon: "▣",
    label: "Storyboards",
    desc: "Scene-by-scene planning to guide pacing and composition.",
    tag: "Planning",
    iconColor: "#3B6D11",
    bgColor: "#EAF3DE",
    tagColor: "#27500A",
    tagBg: "#EAF3DE",
  },
  {
    icon: "⟐",
    label: "Editing",
    desc: "Tight cuts and sequencing designed for rhythm and impact.",
    tag: "Post",
    iconColor: "#993C1D",
    bgColor: "#FAECE7",
    tagColor: "#712B13",
    tagBg: "#FAECE7",
  },
  {
    icon: "↗",
    label: "Motion Design",
    desc: "Dynamic graphics and movement systems for modern visuals.",
    tag: "Motion",
    iconColor: "#0F6E56",
    bgColor: "#E1F5EE",
    tagColor: "#085041",
    tagBg: "#E1F5EE",
  },
  {
    icon: "◉",
    label: "Sound Engineering",
    desc: "Mixing, mastering, and sound design for cinematic delivery.",
    tag: "Audio",
    iconColor: "#5F5E5A",
    bgColor: "#F1EFE8",
    tagColor: "#444441",
    tagBg: "#F1EFE8",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-2.5 p-5 pb-4 rounded-xl bg-white cursor-default select-none transition-all duration-200"
      style={{
        width: 220,
        flexShrink: 0,
        border: hovered ? "0.5px solid #b0aca5" : "0.5px solid #e5e3de",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-9 h-9 rounded-lg text-lg font-medium"
        style={{ background: service.bgColor, color: service.iconColor }}
        aria-hidden
      >
        {service.icon}
      </div>

      {/* Label */}
      <p className="text-sm font-medium text-[#1a1918] m-0">
        {service.label}
      </p>

      {/* Description */}
      <p className="text-xs text-[#6b6965] m-0 leading-relaxed flex-1">
        {service.desc}
      </p>

      {/* Tag */}
      <span
        className="text-[11px] px-2 py-0.5 rounded-lg w-fit"
        style={{ background: service.tagBg, color: service.tagColor }}
      >
        {service.tag}
      </span>
    </div>
  );
}

export default function ServicesCarousel() {
  const [paused, setPaused] = useState(false);
  const doubled = [...services, ...services];

  return (
    <section
      aria-label="Services offered"
      className="w-full flex justify-center bg-[#808080] py-32"
    >
      <div className="w-full min-h-[50vh] max-w-[1400px]">
        {/* Carousel */}
        <div className="overflow-hidden relative">
          {/* Fade left */}
          <div
            aria-hidden
            className="absolute top-0 left-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #808080, transparent)" }}
          />

          {/* Fade right */}
          <div
            aria-hidden
            className="absolute top-0 right-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #808080, transparent)" }}
          />

          {/* Track */}
          <div
            className="flex gap-4"
            style={{
              width: "max-content",
              animation: paused ? "none" : "slide 28s linear infinite",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {doubled.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}