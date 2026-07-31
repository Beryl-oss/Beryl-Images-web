import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  ServiceHero,
  ServiceCard,
  ServiceMobileGallery,
  ServiceModalContent,
  serviceIcons,
  previews
} from "./services/index";
import Modal from "../ui/Modal";

function Services() {
  const { t } = useLanguage();
  const [selectedPreview, setSelectedPreview] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [heroCard, ...cards] = t.services.cards;


  // GSAP animations removed from services section (kept minimal/static)

  return (
    <section
      id="services"
      className="overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            {t.services.badge}
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {t.services.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {t.services.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(400px,1fr)_minmax(320px,420px)]">
          <ServiceHero
            heroCard={heroCard}
            content={t.services}
            previews={previews}
            setSelectedPreview={setSelectedPreview}
            setShowGallery={setShowGallery}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((card, index) => {
              const Icon = serviceIcons[index];
              return <ServiceCard key={card.title} card={card} Icon={Icon} index={index} />;
            })}
          </div>
        </div>
      </div>

      <Modal
          isOpen={!!selectedPreview}
          onClose={() => setSelectedPreview(null)}
      >
          <ServiceModalContent
              preview={selectedPreview}
          />
      </Modal>
      
      {showGallery && (
        <ServiceMobileGallery previews={previews} setSelectedPreview={setSelectedPreview} setShowGallery={setShowGallery} />
      )}
    </section>
  );
}

export default Services;
