import { useEffect, useRef } from "react";
import gsap from "gsap";

function useModalAnimation(isOpen) {
  const modalRef = useRef(null);

  useEffect(() => {

    if (!modalRef.current) return;

    if (!isOpen) {
      gsap.set(modalRef.current, {
        opacity: 0,
        scale: 0.96,
        y: 30,
      });
      return;
    }

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });


      tl.fromTo(
        modalRef.current,
        {
          opacity: 0,
          scale: 0.96,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
        }
      );


      gsap.from(".modal-item", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.15,
        ease: "power3.out",
      });


    }, modalRef);


    return () => ctx.revert();


  }, [isOpen]);


  return modalRef;
}


export default useModalAnimation;