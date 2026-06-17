import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 text-[#0C0C0C]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>

        <div className="w-full flex flex-col">
          {services.map((service, i) => (
            <FadeIn 
              key={service.num} 
              delay={i * 0.1} 
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0"
            >
              <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none shrink-0 w-[12%] sm:w-[15%]">
                {service.num}
              </span>
              <div className="flex flex-col gap-2 sm:gap-4 flex-grow pt-1 sm:pt-2 md:pt-4">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-none">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
