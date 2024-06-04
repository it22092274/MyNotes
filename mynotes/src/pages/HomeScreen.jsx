import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Sidebar from '../components/Sidebar'
import WelcomeBanner from '../components/WelcomeBanner'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PricingSection from '../components/PricingSection'
import CallToActionSection from '../components/CallToActionSection'
import Footer from '../components/Footer'
import AboutUsSection from '../components/AboutUsSection'
import DescriptiveContentSection from '../components/DescriptiveContentSection'
import FAQSection from '../components/FAQSection'
import ContactUsSection from '../components/ContactUsSection'

function HomeScreen() {
  return (
    <main>
    <NavigationBar />
    <section>
      <Sidebar />
      <WelcomeBanner />
      <FeaturesSection />
      <AboutUsSection />
      <DescriptiveContentSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactUsSection />
      <CallToActionSection />
      <Footer />
    </section>
    </main>
  )
}

export default HomeScreen