/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NexaWebAgencyBar } from './components/NexaWebAgencyBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { StyleRecommender } from './components/StyleRecommender';
import { EditorialGallery } from './components/EditorialGallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { SpecialistsSection } from './components/SpecialistsSection';
import { JourneySection } from './components/JourneySection';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [targetServiceId, setTargetServiceId] = useState<string | undefined>(undefined);
  const [targetSpecialistId, setTargetSpecialistId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string, specialistId?: string) => {
    setTargetServiceId(serviceId);
    setTargetSpecialistId(specialistId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0a] text-[#f5f2eb] flex flex-col font-sans selection:bg-[#c59b6d] selection:text-[#0b0b0a]">
      {/* NexaWeb Agency Demonstration Banner */}
      <NexaWebAgencyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Manifesto & Philosophy */}
        <PhilosophySection />

        {/* Intelligent Services Dossier */}
        <ServicesSection onOpenBooking={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Interactive "Encontre seu Estilo" Recommender */}
        <StyleRecommender onOpenBooking={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Editorial Gallery with Lightbox */}
        <EditorialGallery />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider onOpenBooking={() => handleOpenBooking()} />

        {/* Editorial Specialists & Dossier Modals */}
        <SpecialistsSection onOpenBooking={(serviceId, specialistId) => handleOpenBooking(serviceId, specialistId)} />

        {/* Customer Experience Journey (01 - 04) */}
        <JourneySection onOpenBooking={() => handleOpenBooking()} />

        {/* Accordion FAQ */}
        <FAQSection />

        {/* Atelier Location, Hours & Stylized Map */}
        <LocationSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Experience Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialServiceId={targetServiceId}
        initialSpecialistId={targetSpecialistId}
      />
    </div>
  );
}
