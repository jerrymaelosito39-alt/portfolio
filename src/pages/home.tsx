import { motion } from "framer-motion";
import {
  PhoneCall,
  Calendar,
  Users,
  CheckCircle2,
  Award,
  Briefcase,
  Mail,
  Linkedin,
  ArrowRight,
  Quote
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">

      {/* HERO */}
      <section className="relative">
        <div className="w-full h-56 md:h-72 overflow-hidden">
          <img src="/jerry-cover.jpeg" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center -mt-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="/jerry-profile.png" className="w-full h-full object-cover" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mt-6">
              Jerry Mae Losito
            </h1>

            <p className="text-lg text-gray-600 mt-2">
              Sales Professional
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-2"
              >
                Let's Talk <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="px-6 py-3 rounded-full border border-black font-semibold"
              >
                View Profile
              </a>

            </div>

          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Hi, I'm Jerry Mae Losito, with 7+ years of experience in outbound and inbound sales,
          cold calling, lead qualification, and customer engagement across multiple industries.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What I Offer</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 border rounded-xl">
            <PhoneCall className="mb-3" />
            <h3 className="font-bold mb-2">Cold Calling</h3>
            <p className="text-gray-600 text-sm">Lead qualification and outbound sales calls.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <Calendar className="mb-3" />
            <h3 className="font-bold mb-2">Appointment Setting</h3>
            <p className="text-gray-600 text-sm">Scheduling high-quality sales appointments.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <Users className="mb-3" />
            <h3 className="font-bold mb-2">Customer Engagement</h3>
            <p className="text-gray-600 text-sm">Building trust and long-term client relationships.</p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="border-l pl-6 space-y-6">

          <div>
            <h3 className="font-bold">Fusion CX</h3>
            <p className="text-gray-600 text-sm">2019 – 2026</p>
            <p className="text-gray-600 text-sm">
              Outbound/inbound calls, lead qualification, sales support.
            </p>
          </div>

          <div>
            <h3 className="font-bold">SANFORD Marketing</h3>
            <p className="text-gray-600 text-sm">2018</p>
            <p className="text-gray-600 text-sm">
              Customer support and retail assistance.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-black text-white text-center">

        <h2 className="text-3xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="mb-8 text-gray-300">
          Contact me for sales, VA work, or appointment setting roles.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="mailto:jerrymaelosito39@gmail.com"
            className="px-6 py-3 bg-white text-black rounded-full font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://ph.linkedin.com/in/jmlosito"
            target="_blank"
            className="px-6 py-3 border border-white rounded-full"
          >
            LinkedIn
          </a>

        </div>

      </section>

    </div>
  );
}
