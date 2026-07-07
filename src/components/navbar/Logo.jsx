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
          transition-transform
          duration-300
          hover:scale-[1.03]
        "
      />
    </a>
  );
}

export default Logo;