import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ContactHero from '../components/contact/ContactHero';
import ContactCard from '../components/contact/ContactCard';
import TestimonialCard from '../components/contact/TestimonialCard';
import { testimonials } from '../components/contact/contactData';

function Contact() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: t.footer.email,
      href: 'mailto:contact@beryl.com',
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: t.footer.phone,
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: t.contact.addressLabel,
      value: t.footer.address,
      href: '#home',
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,109,0,0.16),_transparent_36%),linear-gradient(135deg,_#050816_0%,_#111827_45%,_#0f172a_100%)] px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05),transparent_35%,rgba(255,109,0,0.04))]" />
      <div className="mx-auto relative z-10 flex max-w-7xl flex-col gap-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ContactHero
            title={t.contact.heading}
            description={t.contact.description}
            ctaLabel={t.contact.cta}
            email={t.footer.email}
          />

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              {contactItems.map((item) => (
                <ContactCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] p-6 shadow-[0_25px_80px_rgba(2,6,23,0.35)] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff6d00]">
                Client love
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{t.contact.testimonialTitle}</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">{t.contact.testimonialIntro}</p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
