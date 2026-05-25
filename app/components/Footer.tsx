"use client";

import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer({
  sectionNumber = "05",
}: {
  sectionNumber?: string;
}) {
  return (
    <footer id="contact"  className="w-full flex justify-center bg-white">
      <div 
        className="w-full max-w-[1420px] min-h-[20vh] "
      >

        {/* MAIN */}
        <div className="pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          {/* LEFT */}
          <div className="flex flex-col gap-6 max-w-[520px]">

            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-black/30 mb-2">
                Creative Direction • Launch Films
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(2.2rem,3vw,3.6rem)] font-medium tracking-[-0.03em] text-black/100"
              >
                iee studios
              </motion.h2>
            </div>

            {/* CONTACT LINKS */}
            <div className="flex gap-3 text-sm text-black/50">

              <a
                href="mailto:inspireelevateevovle@gmail.com"
                className="flex items-center gap-2 hover:text-black transition"
              >
                <HiOutlineMail className="text-[16px]" />
                inspireelevateevovle@gmail.com
              </a>

              <a
                href="https://x.com/madtirth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black transition"
              >
                <RiTwitterXFill className="text-[14px]" />
                @madtirth
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="text-[12px] text-black/30">
            © 2026 IEE Studios
          </div>

        </div>
      </div>
    </footer>
  );
}