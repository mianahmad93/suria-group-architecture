import React, { useEffect, useState, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Send, AlertCircle } from "lucide-react";
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interestedIn: "",
  });
  const [submitted, setSubmitted] = useState(false);

  

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interestedIn: "",
      });
      setSubmitted(false);
    }, 3000);
  };





    const headingRef = useRef<HTMLHeadingElement | null>(null);
  const splitInstance = useRef<any>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (!headingRef.current) return;

    splitInstance.current = new SplitType(headingRef.current, { types: "chars" });
    const chars = splitInstance.current.chars;

    gsap.set(chars, { opacity: 0, y: 30, filter: "blur(6px)" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(chars, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              stagger: 0.03,
              duration: 0.8,
              ease: "power2.out",
            });
          } else {
            gsap.set(chars, { opacity: 0, y: 30, filter: "blur(6px)" });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
      splitInstance.current?.revert();
    };
  }, []);

  useEffect(() => {
    if (!paragraphRef.current) return;

    gsap.set(paragraphRef.current, { opacity: 0, y: 40 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(paragraphRef.current, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            });
          } else {
            gsap.set(paragraphRef.current, { opacity: 0, y: 40 });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(paragraphRef.current);

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-amber-600 to-primary text-white py-16 md:py-24">
      <div className="section-container text-center">
        <motion.div
          className="space-y-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            ref={headingRef}
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Business Inquiry
          </motion.h1>
          <motion.p
            ref={paragraphRef}
            variants={itemVariants}
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            Connect with our team to explore partnership opportunities and
            business solutions tailored to your needs
          </motion.p>
        </motion.div>
      </div>
    </section>

      <section className="section-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Form Card */}
          <div className="bg-white border border-border rounded-xl p-8 md:p-12 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-muted-foreground"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-muted-foreground"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-muted-foreground"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-muted-foreground"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Interested In *
                  </label>
                  <select
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  >
                    <option value="">Select an option</option>
                    <option value="technology">Suira Technologies</option>
                    <option value="constructions">Suira Constructions</option>
                    <option value="foods">Suira Foods</option>
                    <option value="logistics">Suira Logistics</option>
                    <option value="textiles">Suira Textiles</option>
                    <option value="partnership">General Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-muted-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Tell us about your inquiry, business opportunity, or collaboration idea..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <AlertCircle
                    size={20}
                    className="text-blue-600 flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-blue-700">
                    All fields marked with * are required. Our team will review
                    your inquiry and respond within 2-3 business days.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Inquiry
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="text-6xl">✓</div>
                <h3 className="text-2xl font-bold text-green-600">
                  Inquiry Submitted Successfully
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out to Suira Group. Our team will
                  review your inquiry and contact you shortly at the email
                  address provided.
                </p>
                <p className="text-sm text-muted-foreground">
                  Expected response time: 2-3 business days
                </p>
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="font-semibold text-foreground mb-2">
                Quick Response
              </h4>
              <p className="text-muted-foreground text-sm">
                We respond to inquiries within 2-3 business days
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-semibold text-foreground mb-2">
                Expert Team
              </h4>
              <p className="text-muted-foreground text-sm">
                Connected directly with relevant business decision makers
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="font-semibold text-foreground mb-2">
                Confidential
              </h4>
              <p className="text-muted-foreground text-sm">
                Your information is secure and treated confidentially
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LeadForm;
