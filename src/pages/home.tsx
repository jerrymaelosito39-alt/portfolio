import { motion } from "framer-motion";
import { PhoneCall, Calendar, Users, CheckCircle2, Award, Briefcase, MapPin, Mail, Linkedin, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* Cover Photo + Hero Section */}
      <section className="relative">
        {/* Cover Photo */}
        <div className="relative w-full h-56 md:h-72 overflow-hidden">
          <img
            src="/jerry-cover.jpeg"
            alt="Cover photo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
        </div>

        {/* Profile card overlapping the cover */}
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center gap-6 -mt-20 pb-16"
          >
            <motion.div variants={fadeIn} className="relative z-10">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="/jerry-profile.png"
                  alt="Jerry Mae Losito"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-4 py-1.5 rounded-full shadow-sm border border-border flex items-center gap-2 whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium">Available for work</span>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="max-w-3xl space-y-4 mt-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Jerry Mae Losito
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Sales Professional
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300" asChild>
                <a href="#contact">
                  Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#about">View Profile</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              About Me
            </h2>
            <div className="prose prose-lg prose-slate dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Hi, I'm Jerry Mae Losito, a professional with over seven years of experience in high-volume outbound and inbound communication roles. My background in cold calling, lead qualification, and follow-ups has given me a deep understanding of customer needs and relationship building. 
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                I've supported fast-paced campaigns across industries such as Medicare/Medicaid, auto insurance, and home remodeling, where I worked closely with multiple stakeholders to ensure timely updates, proper documentation, and a smooth overall process. 
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              7+ years of proven expertise in high-volume sales, lead qualification, and customer engagement — built to drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={<PhoneCall className="w-6 h-6 text-primary" />}
              title="Lead Qualification & Cold Calling"
              items={[
                "Efficiently engage with potential customers through personalized conversations.",
                "Qualify leads and identify high-interest prospects for better conversions.",
                "Confidently handle objections and increase lead-to-sale success rates."
              ]}
            />
            <ServiceCard 
              icon={<Calendar className="w-6 h-6 text-primary" />}
              title="Appointment Setting & Follow-ups"
              items={[
                "Schedule high-quality appointments that lead to actual sales.",
                "Ensure clients are fully informed before meetings, reducing no-shows.",
                "Conduct strategic follow-ups that improve client retention."
              ]}
            />
            <ServiceCard 
              icon={<Users className="w-6 h-6 text-primary" />}
              title="Consultative Selling & Engagement"
              items={[
                "Build rapport with customers to boost trust and engagement.",
                "Use persuasive yet ethical sales techniques to match customers.",
                "Improve customer satisfaction by providing clear, helpful information."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Training & Certifications */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Development</h2>
              <p className="text-secondary-foreground/80 text-lg">
                Continuously sharpening my skills to deliver better results for every client and campaign.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="bg-background text-foreground rounded-xl p-6 shadow-lg transform transition-transform hover:-translate-y-1">
                <Award className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-1">Sales & Cold Calling Certification</h4>
                <p className="text-muted-foreground text-sm">Advanced outbound communication techniques</p>
              </div>
              
              <div className="bg-background text-foreground rounded-xl p-6 shadow-lg transform transition-transform hover:-translate-y-1">
                <Award className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-1">Lead Qualification Badge</h4>
                <p className="text-muted-foreground text-sm">Expertise in prospect identification and conversion</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Campaigns */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
              
              <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="md:text-right relative mb-4 md:mb-0">
                  <div className="absolute -left-[41px] md:left-auto md:-right-[41px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background z-10" />
                  <h3 className="text-2xl font-bold">Fusion CX</h3>
                  <p className="text-primary font-medium mb-2">Project Call Center Agent</p>
                  <p className="text-muted-foreground text-sm">2019 – 2026</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Handled outbound and inbound calls for various campaigns.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Assisted customers with inquiries, sales, and follow-ups.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Maintained high customer satisfaction and conversion rates.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="md:text-right md:order-1 relative mb-4 md:mb-0">
                  <div className="absolute -left-[41px] md:-left-[41px] top-1 w-5 h-5 rounded-full bg-muted-foreground ring-4 ring-background z-10" />
                  <h3 className="text-2xl font-bold">SANFORD Marketing</h3>
                  <p className="text-muted-foreground font-medium mb-2">Bagger</p>
                  <p className="text-muted-foreground text-sm">2018</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm md:text-right">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start md:justify-end gap-2">
                      <span className="md:hidden w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      Assisted customers with packing and carrying groceries.
                    </li>
                    <li className="flex items-start md:justify-end gap-2">
                      <span className="md:hidden w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      Ensured efficient and organized checkout processes.
                    </li>
                    <li className="flex items-start md:justify-end gap-2">
                      <span className="md:hidden w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      Provided excellent customer service.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20">
            <h3 className="text-center text-xl font-semibold mb-8 text-muted-foreground">Industries & Campaigns Handled</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 rounded-full bg-card border border-border font-medium shadow-sm flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" /> Medicare/Medicaid
              </span>
              <span className="px-6 py-3 rounded-full bg-card border border-border font-medium shadow-sm flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" /> Auto Insurance
              </span>
              <span className="px-6 py-3 rounded-full bg-card border border-border font-medium shadow-sm flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" /> Home Remodeling
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Others Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background p-8 rounded-3xl shadow-sm border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-8" />
              <p className="text-lg text-foreground mb-6 relative z-10">
                "Jerry Mae is excellent at identifying the right leads and ensuring they are fully qualified before being transferred to our specialists."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  R
                </div>
                <div>
                  <h4 className="font-bold">Rose M.</h4>
                  <p className="text-sm text-muted-foreground">Operations Manager</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background p-8 rounded-3xl shadow-sm border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-8" />
              <p className="text-lg text-foreground mb-6 relative z-10">
                "His professionalism and persistence helped us improve appointment show rates significantly!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  M
                </div>
                <div>
                  <h4 className="font-bold">Mark Q.</h4>
                  <p className="text-sm text-muted-foreground">Team Leader</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary text-primary-foreground" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-background/10 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to work together?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
              Looking for a results-driven sales professional who can connect you with the right customers? Let's talk!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:jerrymaelosito39@gmail.com" 
                className="flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full font-semibold hover:bg-background/90 transition-colors shadow-lg w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5 text-primary" />
                jerrymaelosito39@gmail.com
              </a>
              
              <a 
                href="https://ph.linkedin.com/in/jmlosito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors w-full sm:w-auto justify-center"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Jerry Mae Losito. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card p-8 rounded-3xl border border-border shadow-sm h-full"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}