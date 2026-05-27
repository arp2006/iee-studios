"use client";

import { useEffect, useRef, useState } from "react";

type Service = {
  title: string;
  tag: string;
  icon: string;
  color: string;
  glow: string;
  num: string;
};

const services: Service[] = [
  {
    title: "Ideation",
    tag: "concept development",
    icon: "💡",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.16)",
    num: "01",
  },
  {
    title: "Creative Direction",
    tag: "vision & strategy",
    icon: "🎯",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.16)",
    num: "02",
  },
  {
    title: "Scripting",
    tag: "narrative craft",
    icon: "✍️",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.16)",
    num: "03",
  },
  {
    title: "Moodboard",
    tag: "visual language",
    icon: "🎨",
    color: "#10b981",
    glow: "rgba(16,185,129,0.16)",
    num: "04",
  },
  {
    title: "Storyboard",
    tag: "scene planning",
    icon: "🎬",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.16)",
    num: "05",
  },
  {
    title: "Editing",
    tag: "cut & polish",
    icon: "✂️",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.16)",
    num: "06",
  },
  {
    title: "Motion Design",
    tag: "animated worlds",
    icon: "🌀",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.16)",
    num: "07",
  },
  {
    title: "Sound Engineering",
    tag: "audio mastery",
    icon: "🎧",
    color: "#14b8a6",
    glow: "rgba(20,184,166,0.16)",
    num: "08",
  },
];

export default function AgencyServicesCurvedCarousel() {
  const [angle, setAngle] = useState(0);

  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const autoSpinRef = useRef(true);
  const lastXRef = useRef(0);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const RX = 620;
  const RY = 100;

  useEffect(() => {
    let frame: number;

    const animate = () => {
      if (!draggingRef.current) {
        if (autoSpinRef.current) {
          velocityRef.current += (0.0028 - velocityRef.current) * 0.04;
        } else {
          velocityRef.current *= 0.94;
        }

        angleRef.current += velocityRef.current;
        setAngle(angleRef.current);
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  const handlePointerDown = (clientX: number) => {
    draggingRef.current = true;
    autoSpinRef.current = false;
    lastXRef.current = clientX;
    velocityRef.current = 0;

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
  };

  const handlePointerMove = (clientX: number) => {
    if (!draggingRef.current) return;

    const dx = clientX - lastXRef.current;

    velocityRef.current = dx * 0.004;
    angleRef.current += velocityRef.current;

    lastXRef.current = clientX;

    setAngle(angleRef.current);
  };

  const handlePointerUp = () => {
    if (!draggingRef.current) return;

    draggingRef.current = false;

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {
      autoSpinRef.current = true;
    }, 1800);
  };

  return (
    <section
      className="relative flex h-[620px] w-full items-center justify-center overflow-hidden bg-white px-6 select-none"
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onMouseMove={(e) => handlePointerMove(e.clientX)}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
      onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
      onTouchEnd={handlePointerUp}
    >
      {/* soft radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_40%)]" />


      {/* ellipse lines */}
      {/* cards */}
      {services.map((service, i) => {
        const a = (2 * Math.PI * i) / services.length + angle;

        const x = Math.cos(a) * RX;
        const y = Math.sin(a) * RY;

        const depthT = (Math.sin(a) + 1) / 2;
        
        const scale = 1;

        const z = Math.sin(a);

        const opacity = 0.45 + depthT * 0.55;

        const isActive = z > 0.45;

        return (
          <div
            key={service.title}
            className="absolute top-1/2 left-1/2 will-change-transform"
            style={{
              transform: `translate(${x - 180}px, ${y - 60}px) scale(${scale})`,
              opacity,
              zIndex: Math.round((z + 1) * 50),
            }}
          >
            <div
              className="relative flex w-[360px] flex-col gap-7 rounded-[40px] border border-black/6 bg-white p-10 transition-all duration-300"
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
                  : `linear-gradient(135deg, ${service.color}ee, ${service.color}bb)`,

                boxShadow: isActive
                  ? `0 25px 80px ${service.glow}`
                  : `0 10px 40px ${service.glow}`,

                borderColor: "transparent",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-medium tracking-[0.22em] text-white/60">
                  {service.num}
                </span>

                <div className="text-5xl">
                  {service.icon}
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-[40px] font-semibold leading-[0.95] tracking-[-0.06em]"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  {service.title}
                </h3>

                <p className="text-[16px] leading-relaxed tracking-[0.01em] text-white/70">
                  {service.tag}
                </p>
              </div>


            </div>
          </div>
        );
      })}

      {/* hint */}
      <div className="absolute bottom-12 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
        <span>←</span>
        Drag to explore
        <span>→</span>
      </div>
    </section>
  );
}