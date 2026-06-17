interface LiveProjectButtonProps {
  className?: string;
  href?: string;
}

export function LiveProjectButton({ className = "", href = "#" }: LiveProjectButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-10 py-3.5 sm:px-12 sm:py-4 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors ${className}`}
    >
      Live Project
    </a>
  );
}
