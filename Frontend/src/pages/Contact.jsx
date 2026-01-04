import React from "react";
import WorkInpro from "../components/WorkInpro";
import Headers from "../components/Header";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactCTA from "../components/ContactCta";
const Contact = () => {
  return (
   <>
   <ContactHero/>
       <ContactForm/>
       <ContactInfo/>
       <ContactCTA/>
   </>
  );
};

export default Contact;
