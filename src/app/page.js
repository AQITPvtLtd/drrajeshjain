import About from "@/components/homepage/About";
import Appointment from "@/components/homepage/Appointment";
import Banner from "@/components/homepage/Banner";
import Faq from "@/components/homepage/Faq";
import OurTeam from "@/components/homepage/OurTeam";
import Testimonials from "@/components/homepage/Testimonials";
import Treatments from "@/components/homepage/Treatments";

export default function Home() {
  return (
    <div>
      <Banner />
      <Appointment />
      <About />
      <Treatments />
      <OurTeam />
      <Testimonials />
      <Faq />
    </div>
  );
}
