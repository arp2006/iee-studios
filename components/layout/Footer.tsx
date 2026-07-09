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
    <footer id="contact" className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1420px] px-6 md:px-0">

        <div className="pb-12 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10">

          {/* LEFT */}
          <div className="flex flex-col gap-5 md:gap-6 max-w-[520px]">

            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-black/30 mb-2">
                Creative Direction • Launch Films
              </p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(2rem,3vw,3.6rem)] font-medium tracking-[-0.03em] text-black"
              >
                iee studios
              </motion.h2>
            </div>

            {/* CONTACT LINKS — stack on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-black/50">
              <a
                href="mailto:tirth@iee.studio"
                className="flex items-center gap-2 hover:text-black transition break-all"
              >
                <HiOutlineMail className="text-[16px] shrink-0" />
                <span>tirth@iee.studio</span>
              </a>

              <span className="hidden sm:block text-black/20">·</span>

              <a
                href="https://x.com/madtirth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black transition"
              >
                <RiTwitterXFill className="text-[14px] shrink-0" />
                <span>@madtirth</span>
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