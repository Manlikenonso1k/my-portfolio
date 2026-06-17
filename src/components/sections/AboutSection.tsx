import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon 3D" className="w-full h-auto" />
      </FadeIn>
      
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego 3D" className="w-full h-auto" />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="Abstract 3D" className="w-full h-auto" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center z-10 w-full max-w-4xl relative">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14 md:mb-16">
            About me
          </h2>
        </FadeIn>

        <AnimatedText 
          text="Hi, I'm Nonso. For the past six years, I’ve been helping businesses build a strong, profitable presence on the web. I specialise in creating custom web solutions like tailored POS systems and CRM platforms that make running your day-to-day operations easier and more efficient. To me, web development isn't just about writing code; it's about solving real business problems. I rely on a solid tech stack of PHP, MySQL, Laravel, and Django to build fast, secure, and scalable platforms suited exactly to your needs. If you're looking to bring your business online, manage your sales better, or streamline how you connect with customers, I build the digital tools to make it happen."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[800px] text-[clamp(1rem,1.8vw,1.35rem)] mb-16 sm:mb-20 md:mb-24"
        />

        <ContactButton />
      </div>
    </section>
  );
}
