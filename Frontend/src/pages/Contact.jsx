import React from "react";
import Header from "../components/Header";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactCTA from "../components/ContactCta";

const Contact = () => {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <ContactHero />

      {/* Main Content */}
      <section className="relative z-10 space-y-32">

        {/* Contact Form */}
        <ContactForm />

        {/* Contact Information */}
        <ContactInfo />

        {/* Call To Action */}
        <ContactCTA />

      </section>

    </main>
  );
};

export default Contact;
