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
          bg-white/50
          px-1.5
          rounded-md
          transition-transform
          scale-[1.2]
          duration-300
          hover:scale-[1.25]
        "
      />
    </a>
  );
}

export default Logo;