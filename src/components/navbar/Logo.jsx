import BerylLogo from "../../assets/icons/BerylImg-gold.svg";
import { useRef } from "react";

function Logo({ logoRef }) {
  return (
    <a
      ref={logoRef}
      href="/"
      className="
        flex
        items-center
      "
    >
      <img
        src={BerylLogo}
        alt="Béryl Images"
        className="
          h-9
          w-auto
          object-contain
          px-1.5
          rounded-md
          border-white/70 
          bg-white/70 
          text-[#264653]
          shadow-[0_6px_18px_rgba(15,23,42,0.1)] 
          backdrop-blur-md 
          transition-all 
          duration-300 hover:scale-105
          hover:bg-white
          scale-[1.2]
          hover:scale-[1.25]
        "
      />
    </a>
  );
}

export default Logo;