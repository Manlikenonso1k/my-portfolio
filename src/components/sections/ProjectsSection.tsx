import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';

const projects = [
  { name: "Iceland Beach", link: "https://icelandbeach.com", category: "Client" },
  { name: "Morithos", link: "https://morithos.com", category: "Client" },
  { name: "Oceanova", link: "https://oceanova.ng", category: "Client" },
  { name: "College of Arts", link: "https://collegeofartslagos.com", category: "Client" },
  { name: "Phone For You", link: "https://phoneforyou.co.uk", category: "Client" },
  { name: "Greatman", link: "https://greatman.ng", category: "Client" },
  { name: "Profitbuyz", link: "https://profitbuyz.com", category: "Client" },
  { name: "Black Fragrance", link: "https://blackfragrance.com.ng", category: "Client" },
  { name: "Tenstrings", link: "https://tenstrings.org", category: "Client" },
  { name: "Africa Heritage", link: "https://africaheritage.org/", category: "Client" }
];

// Fallback images from the original 3 projects, repeated for the 10 projects
const mockImages = [
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  ],
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  ],
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  ]
];

function ProjectCard({ project, index, progress, total }: any) {
  const images = mockImages[index % 3];
  
  // Calculate dynamic scale: scales down as we scroll past it
  // progress goes from 0 to 1 over the whole section
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 28}px)` }}
        className="relative w-full max-w-7xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6"
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
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <img 
              src={images[0]} 
              alt={`${project.name} preview 1`} 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(130px,16vw,230px)]"
            />
            <img 
              src={images[1]} 
              alt={`${project.name} preview 2`} 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(160px,22vw,340px)]"
            />
          </div>
          <div className="w-full md:w-[60%]">
            <img 
              src={images[2]} 
              alt={`${project.name} main preview`} 
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[300px]"
            />
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
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-28 flex justify-center">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
          Project
        </h2>
      </div>

      <div ref={containerRef} className="relative">
        {/* We need enough height to scroll through all 10 cards smoothly. 
            Each card represents about 100vh of scrolling. */}
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
