export default function Navbar() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">

      <div className="flex items-center">

        {/* LEFT */}
        <div className="w-[170px] flex justify-start mr-14">

          <button className="group bg-black border border-white/10 rounded-full h-[52px] w-[52px] hover:w-[170px] transition-[width] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex items-center justify-center overflow-hidden relative shrink-0">

            {/* dot */}
            <div className="absolute w-2 h-2 rounded-full bg-white group-hover:opacity-0 transition-opacity duration-200" />

            {/* text */}
            <span className="text-white text-sm tracking-[-0.02em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              iee studios
            </span>

          </button>

        </div>

        {/* CENTER */}
        <div className="backdrop-blur-md border border-white/10 bg-white/5 rounded-full h-[52px] px-3 flex items-center gap-1">

          {["Projects", "About", "Contact"].map((item) => (
            <button
              key={item}
              className="text-white/70 hover:text-white transition-colors duration-300 text-sm px-6 h-[40px] flex items-center whitespace-nowrap"
            >
              {item}
            </button>
          ))}

        </div>

        {/* RIGHT */}
        <button className="ml-6 bg-white text-black rounded-full h-[52px] px-8 text-sm hover:bg-white/90 transition-all duration-300 whitespace-nowrap shrink-0">
          Book a Call
        </button>

      </div>

    </div>
  );
}