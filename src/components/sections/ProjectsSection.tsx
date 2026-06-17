import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';

// Each project entry: image1 (top-left, 486×230), image2 (bottom-left, 486×340), video (right, 730×594)
// "Phone For You" has no video so it uses a PNG for the right slot
const projects = [
  {
    name: "Iceland Beach",
    link: "https://icelandbeach.com",
    category: "Client",
    image1: "/icelandbeach1.png",
    image2: "/icelandbeach.png",
    video: "/Iceland.mp4",
  },
  {
    name: "Morithos",
    link: "https://morithos.com",
    category: "Client",
    image1: "/MORITHOS1.png",
    image2: "/MORITHOS.png",
    video: "/Moritho's.mp4",
  },
  {
    name: "Oceanova",
    link: "https://oceanova.ng",
    category: "Client",
    image1: "/oceanova1.png",
    image2: "/oceanova.png",
    video: "/Oceanova.mp4",
  },
  {
    name: "College of Arts",
    link: "https://collegeofartslagos.com",
    category: "Client",
    image1: "/icca1.png",
    image2: "/ICCA.png",
    video: "/icca.mp4",
  },
  {
    name: "Phone For You",
    link: "https://phoneforyou.co.uk",
    category: "Client",
    image1: "/phoneforyou1.png",
    image2: "/phoneforyou.png",
    video: null,
    videoFallback: "/phoneforyoump4.png",
  },
  {
    name: "Greatman",
    link: "https://greatman.ng",
    category: "Client",
    image1: "/greatman1.png",
    image2: "/greatman.png",
    video: "/GreatMan.mp4",
  },
  {
    name: "Profitbuyz",
    link: "https://profitbuyz.com",
    category: "Client",
    image1: "/profitbuyz1.png",
    image2: "/profitbuyz.png",
    video: "/ProfitBuyz.mp4",
  },
  {
    name: "Black Fragrance",
    link: "https://blackfragrance.com.ng",
    category: "Client",
    image1: "/blackfrag1.png",
    image2: "/blackfrag.png",
    video: "/Black.mp4",
  },
  {
    name: "Tenstrings",
    link: "https://tenstrings.org",
    category: "Client",
    image1: "/tenstrings1.png",
    image2: "/tenstrings.png",
    video: "/Tenstrings.mp4",
  },
  {
    name: "Africa Heritage",
    link: "https://africaheritage.org/",
    category: "Client",
    image1: "/african1.png",
    image2: "/african.png",
    video: "/Africa.mp4",
  },
];

function ProjectCard({ project, index, progress, total }: any) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  const roundedClass = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 28}px)` }}
        className={`relative w-full max-w-7xl ${roundedClass} border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6`}
      >
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
          <div className="flex items-end gap-6 sm:gap-10">
            <span className="font-black text-[clamp(4rem,8vw,120px)] leading-[0.8] text-[#D7E2EA]">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div className="flex flex-col pb-2">
              <span className="uppercase text-sm sm:text-base font-medium opacity-60 mb-1">
                {project.category}
              </span>
              <h3 className="uppercase font-medium text-[clamp(1.5rem,3vw,3rem)] leading-none">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="pb-2">
            <LiveProjectButton href={project.link} />
          </div>
        </div>

        {/* Bottom Image Grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 flex-grow min-h-0">
          {/* Left column: image1 (top) + image2 (bottom) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <img
              src={project.image1}
              alt={`${project.name} preview 1`}
              className={`w-full object-cover ${roundedClass} h-[clamp(130px,16vw,230px)]`}
            />
            <img
              src={project.image2}
              alt={`${project.name} preview 2`}
              className={`w-full object-cover ${roundedClass} h-[clamp(160px,22vw,340px)]`}
            />
          </div>

          {/* Right column: looping video (or fallback image) */}
          <div className="w-full md:w-[60%]">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover ${roundedClass} min-h-[300px]`}
              />
            ) : (
              <img
                src={project.videoFallback}
                alt={`${project.name} main preview`}
                className={`w-full h-full object-cover ${roundedClass} min-h-[300px]`}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-28 flex justify-center">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
          Project
        </h2>
      </div>

      <div ref={containerRef} className="relative">
        <div style={{ height: `${projects.length * 100}vh` }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              progress={scrollYProgress}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
