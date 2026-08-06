import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Github, Linkedin, Twitter } from "../components/SocialIcon";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { portfolioData } from "../data/portfolioData";
import { fadeIn } from "../utils/motion";
import DotField from "../components/DotField";

function ContactComponent() {
  const { email, location, github, linkedin, twitter } =
    portfolioData.personalInfo;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanEmail = email.startsWith("mailto:") ? email.replace("mailto:", "") : email;
    const mailtoUrl = `mailto:${cleanEmail}?subject=${encodeURIComponent(formData.subject || "Contact from Portfolio")}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleCopyEmail = (e) => {
    const cleanEmail = email.startsWith("mailto:") ? email.replace("mailto:", "") : email;
    navigator.clipboard.writeText(cleanEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full relative">
      <div className="absolute -top-20 -bottom-20 md:-top-28 md:-bottom-28 left-1/2 -translate-x-1/2 w-screen -z-10 pointer-events-none overflow-hidden">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(214, 164, 92, 0.35)"
          gradientTo="rgba(110, 17, 38, 0.25)"
          glowColor="#0F0B0C"
        />
      </div>
      <SectionHeader
        subtitle="Get In Touch"
        title="LET'S BUILD SOMETHING "
        highlightWord="EXTRAORDINARY"
        description="Have a project in mind, looking for a collaborator, or just want to say hello? Drop a message."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-8 items-start">
        {/* Left Column: Direct Info & Social Linkages */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          <Card
            index={0}
            direction="right"
            className="relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6E1126]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#6E1126]/10 transition-all duration-500" />

            <h3 className="text-xl font-bold text-white mb-2">
              Connect Directly
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
              I am open to contract opportunities, remote work collaborations,
              and technical advisory roles. Let's start the conversation.
            </p>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                <div className="p-2.5 bg-[#4A0E1A]/10 text-[#D6A45C] rounded-lg shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                    Email Me
                  </p>
                  <a
                    href={email.startsWith("mailto:") ? email : `mailto:${email}`}
                    onClick={handleCopyEmail}
                    className="text-xs sm:text-sm font-semibold text-gray-200 hover:text-white transition-all flex items-center gap-2 group/email"
                  >
                    <span>{email.startsWith("mailto:") ? email.replace("mailto:", "") : email}</span>
                    {copied ? (
                      <span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded animate-pulse">
                        Copied!
                      </span>
                    ) : (
                      <span className="text-[8px] text-neutral-500 group-hover/email:text-neutral-300 transition-colors opacity-0 group-hover/email:opacity-100 px-1 py-0.5 border border-white/5 rounded">
                        Click to copy
                      </span>
                    )}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                <div className="p-2.5 bg-[#6E1126]/10 text-[#D6A45C] rounded-lg shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-200">
                    {location}
                  </p>
                </div>
              </div>
            </div>

            <hr className="w-full border-white/5 mb-6" />

            {/* Social Icons row */}
            <div className="flex items-center gap-4">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full glassmorphism text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full glassmorphism text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full glassmorphism text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </div>

        {/* Right Column: Premium Form */}
        <div className="lg:col-span-7 w-full">
          <Card
            index={1}
            direction="left"
            className="relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4A0E1A]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#4A0E1A]/10 transition-all duration-500" />

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 relative z-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] uppercase font-bold text-gray-400 tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/5 focus:border-[#D6A45C]/30 focus:ring-1 focus:ring-[#D6A45C]/30 text-white rounded-xl py-3 px-4 text-sm font-light outline-none transition-all duration-300 placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] uppercase font-bold text-gray-400 tracking-wider"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/5 focus:border-[#D6A45C]/30 focus:ring-1 focus:ring-[#D6A45C]/30 text-white rounded-xl py-3 px-4 text-sm font-light outline-none transition-all duration-300 placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-[10px] uppercase font-bold text-gray-400 tracking-wider"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/5 focus:border-[#D6A45C]/30 focus:ring-1 focus:ring-[#D6A45C]/30 text-white rounded-xl py-3 px-4 text-sm font-light outline-none transition-all duration-300 placeholder:text-gray-600"
                  placeholder="Inquiry about new project"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[10px] uppercase font-bold text-gray-400 tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/5 focus:border-[#D6A45C]/30 focus:ring-1 focus:ring-[#D6A45C]/30 text-white rounded-xl py-3 px-4 text-sm font-light outline-none transition-all duration-300 placeholder:text-gray-600 resize-none"
                  placeholder="Hey, let's discuss..."
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                icon={Send}
                className="mt-2 self-start w-full sm:w-auto"
                disabled={submitted}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export const Contact = SectionWrapper(ContactComponent, "contact");
