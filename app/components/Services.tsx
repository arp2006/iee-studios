// const services = [
//   "Ideation",
//   "Creative Direction",
//   "Scripting",
//   "Moodboards",
//   "Storyboards",
//   "Editing",
//   "Motion Design",
//   "Sound Engineering",
// ];

// export default function Services() {
//   return (
//     <section className="w-full flex justify-center bg-[#808080] py-32">
//       <div className="w-full min-h-[50vh] max-w-[1400px]">

//         {/* top */}
//         will put moving cards here
//       </div>
//     </section>
//   );
// }
"use client"

import { useRef, useState } from "react";

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
  return (
    <div
      style={{
        width: 220,
        flexShrink: 0,
        border: "0.5px solid #e5e3de",
        borderRadius: 12,
        background: "white",
        padding: "1.25rem 1.25rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "default",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#b0aca5";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e3de";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 8,
          background: service.bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          color: service.iconColor,
          fontWeight: 500,
        }}
        aria-hidden
      >
        {service.icon}
      </div>

      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: "#1a1918",
          margin: 0,
        }}
      >
        {service.label}
      </p>

      <p
        style={{
          fontSize: 12,
          color: "#6b6965",
          margin: 0,
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {service.desc}
      </p>

      <span
        style={{
          display: "inline-block",
          fontSize: 11,
          padding: "2px 8px",
          borderRadius: 8,
          background: service.tagBg,
          color: service.tagColor,
          width: "fit-content",
        }}
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
    <section aria-label="Services offered" style={{ padding: "2rem 0", background: "#ffff" }}>


      {/* Carousel */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Fade left */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(to right, #ffffff, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Fade right */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(to left, #ffffff, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Track */}
        <div
          style={{
            display: "flex",
            gap: 16,
            width: "max-content",
            animation: paused ? "none" : "slide 28s linear infinite",
            transform: paused ? undefined : undefined,
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {doubled.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
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