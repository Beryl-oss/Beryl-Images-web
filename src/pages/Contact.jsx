import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactCard from "../components/contact/ContactCard";
import TestimonialCard from "../components/contact/TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const { t } = useLanguage();
  const testimonials = t.contact.testimonials;
  const [showForm, setShowForm] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {

  const ctx = gsap.context(() => {

    const cards = gsap.utils.toArray(".testimonial-card");


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });


    tl.from(".contact-hero", {
      opacity: 0,
      y: 35,
      duration: 0.9,
    })


    .from(".contact-panel", {
      opacity: 0,
      x: 40,
      duration: 0.8,
    }, "-=0.45")


    .from(".testimonial-header", {
      opacity: 0,
      y: 30,
      duration: 0.7,
    }, "-=0.35");


    if(cards.length){

      gsap.set(cards,{
        opacity:0,
        y:30,
      });


      tl.to(cards,{
        opacity:1,
        y:0,
        stagger:0.15,
        duration:0.65,
        ease:"power3.out",
      }, "-=0.25");

    }


    ScrollTrigger.refresh();


  }, sectionRef);


  return () => ctx.revert();


}, []);


  const contactItems = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: t.footer.email,
      href: `mailto:${t.footer.email}`,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: t.footer.phone,
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: t.contact.addressLabel,
      value: t.footer.address,
      href: "#home",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,109,0,0.16),_transparent_36%),linear-gradient(135deg,_#050816_0%,_#111827_45%,_#0f172a_100%)] px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05),transparent_35%,rgba(255,109,0,0.04))]" />

      <div className="absolute -top-40 left-0 h-[420px] w-[420px] rounded-full bg-[#22d3ee]/10 blur-[170px]" />

      <div className="absolute bottom-[-120px] right-[-80px] h-[520px] w-[520px] rounded-full bg-[#ff6d00]/10 blur-[220px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16">
        {/* HERO + CONTACT PANEL */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="contact-hero">
            <ContactHero
              title={t.contact.heading}
              description={t.contact.description}
              ctaLabel={t.contact.cta}
              email={t.footer.email}
              onOpenForm={() => setShowForm(!showForm)}
              isOpen={showForm}
            />
              <div className="mt-8">
                <ContactForm isOpen={showForm} />
              </div>
          </div>

          <div className="contact-panel rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              {contactItems.map((item) => (
                <ContactCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* TESTIMONIALS */}
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] p-6 shadow-[0_25px_80px_rgba(2,6,23,0.35)] backdrop-blur-sm sm:p-8">
          <div className="testimonial-header flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff6d00]">
                Trusted by clients
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                {t.contact.testimonialTitle}
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-400">
              {t.contact.testimonialIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;