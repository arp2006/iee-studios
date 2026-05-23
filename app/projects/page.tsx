import Bottomnav from "../components/Bottomnav";
import Footer from "../components/Footer";

const projects = [
  {
    num: "1",
    title: "Basalt Furniture",
    thumbnail: "/thumbnails/thumb1.png",
    deliverables: [
      "Launch film",
      "Script direction",
      "Product narrative",
      "Social cutdowns",
    ],
    year: "2024",
  },
  {
    num: "2",
    title: "CareKeep",
    thumbnail: "/thumbnails/thumb2.png",
    deliverables: [
      "Launch film",
      "Script direction",
      "Product narrative",
      "Social cutdowns",
    ],
    year: "2024",
  },
  {
    num: "3",
    title: "Nebula AI Agents",
    thumbnail: "/thumbnails/thumb3.png",
    deliverables: [
      "Launch film",
      "Script direction",
      "Product narrative",
      "Social cutdowns",
    ],
    year: "2023",
  },
  {
    num: "4",
    title: "Omni ID - Authologic",
    thumbnail: "/thumbnails/thumb4.png",
    deliverables: [
      "Launch film",
      "Script direction",
      "Product narrative",
      "Social cutdowns",
    ],
    year: "2023",
  },
];

export default function Projects() {
  return (
    <main className="bg-white text-black ">
      <Bottomnav />

      {/* HERO */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">

        {/* optional bg */}
        {/* <div className="absolute inset-0"> */}
        {/* image */}
        {/* <img
            src="/bg/projects-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          /> */}

        {/* video */}
        {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/bg/projects.mp4" type="video/mp4" />
          </video> */}

        {/* <div className="absolute inset-0 bg-black/30" /> */}
        {/* </div> */}

        <div className="relative z-10 px-6 text-center max-w-5xl">

          <h1 className="text-black text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-0.05em]">
            Building cinematic
            <br />
            digital experiences.
          </h1>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="w-full flex justify-center bg-white py-10 px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-[1400px]">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {projects.map((project) => (
              <div
                key={project.num}
                className="group cursor-pointer"
              >

                {/* top info */}
                <div className="flex items-start justify-between mb-6 border-b border-black/10 pb-4">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-3">
                      {project.year}
                    </p>

                    <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-[-0.04em] leading-none text-black">
                      {project.title}
                    </h3>
                  </div>

                </div>

                {/* thumbnail */}
                <div className="relative overflow-hidden bg-black aspect-[16/9]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
                </div>

                {/* deliverables */}
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {project.deliverables.map((item) => (
                    <p
                      key={item}
                      className="text-sm text-black/60 tracking-[-0.01em]"
                    >
                      {item}
                    </p>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}