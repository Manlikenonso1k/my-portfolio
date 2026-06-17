interface ContactButtonProps {
  className?: string;
}

export function ContactButton({ className = "" }: ContactButtonProps) {
  return (
    <a 
      href="https://wa.me/2349036033056"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full px-10 py-3.5 sm:px-12 sm:py-4 md:px-14 md:py-5 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      Contact Me
    </a>
  );
}
