import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import gsap from "gsap";

import { useLanguage } from "../../context/LanguageContext";

function ContactForm({ isOpen }) {

  const { t } = useLanguage();

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const formRef = useRef(null);
  const fieldsRef = useRef([]);


  useEffect(() => {

    if (!formRef.current) return;


    if (isOpen) {

      gsap.to(formRef.current, {
        height: "auto",
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });


      gsap.fromTo(
        fieldsRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        }
      );


    } else {

      gsap.to(formRef.current, {
        height: 0,
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power3.inOut",
      });

    }

  }, [isOpen]);



  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("sending");
    setMessage("");


    const form = e.target;
    const formData = new FormData(form);


    try {

      const response = await fetch(
        "https://formspree.io/f/xjgngnyv",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );


      if (response.ok) {

        setStatus("success");

        setMessage(
          t.contact.form.success
        );

        form.reset();


      } else {

        throw new Error();

      }


    } catch (error) {

      setStatus("error");

      setMessage(
        t.contact.form.error
      );

    }

  };



  return (

    <div
      ref={formRef}
      className="overflow-hidden opacity-0 h-0"
    >

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
      >


        <input
          ref={(el) => fieldsRef.current[0] = el}
          type="text"
          name="name"
          placeholder={t.contact.form.name}
          required
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-slate-400 transition-all duration-200 ease-out hover:bg-white/3 focus:border-[#ff6d00]"
        />



        <input
          ref={(el) => fieldsRef.current[1] = el}
          type="email"
          name="email"
          placeholder={t.contact.form.email}
          required
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-slate-400 transition-all duration-200 ease-out hover:bg-white/3 focus:border-[#ff6d00]"
        />



        <textarea
          ref={(el) => fieldsRef.current[2] = el}
          name="message"
          placeholder={t.contact.form.message}
          rows="5"
          required
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-slate-400 transition-all duration-200 ease-out hover:bg-white/3 focus:border-[#ff6d00]"
        />



        <button
          ref={(el) => fieldsRef.current[3] = el}
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6d00] px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
        >

          {status === "sending"
            ? t.contact.form.sending
            : t.contact.form.send
          }


          <Send size={18} />

        </button>



        {status === "success" && (

          <div className="flex items-center gap-2 text-sm text-green-400">

            <CheckCircle size={18} />

            {message}

          </div>

        )}



        {status === "error" && (

          <div className="flex items-center gap-2 text-sm text-red-400">

            <AlertCircle size={18} />

            {message}

          </div>

        )}


      </form>

    </div>

  );

}


export default ContactForm;