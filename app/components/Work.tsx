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
    title: "prozet Omni ID - Authologic",
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

export default function Work() {
  return (
    <section className="w-full flex justify-center bg-white py-10">
      <div className="w-full max-w-[1420px]">

        {/* projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {projects.map((project) => (
            <div
              key={project.num}
              className="group"
            >

              {/* top info */}
              <div className="flex items-start justify-between mb-6 border-b border-black/10">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-3">
                    {project.year}
                  </p>

                  {/* <h3 className="text-[clamp(2rem,4vw,4rem)] font-light tracking-[-0.04em] leading-none text-black">
                    {project.title}
                  </h3> */}
                </div>

                {/* <span className="text-black/20 text-sm">
                  0{project.num}
                </span> */}
              </div>

              {/* thumbnail */}
              <div className="relative overflow-hidden bg-black aspect-[16/9]  cursor-pointer">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
              </div>

              {/* deliverables */}
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
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
  );
}