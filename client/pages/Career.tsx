import React, { useEffect, useState, useRef } from "react";
import { Layout } from "@/components/Layout";
import { MapPin, Briefcase, Upload } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";

const careers = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Suira Technologies",
    location: "Tech Hub, City",
    type: "Full-time",
    description:
      "Lead development of cutting-edge solutions with a talented team",
  },
  {
    id: 2,
    title: "Project Manager",
    company: "Suira Constructions",
    location: "Construction Zone, City",
    type: "Full-time",
    description:
      "Oversee large-scale construction projects from conception to completion",
  },
  {
    id: 3,
    title: "Supply Chain Analyst",
    company: "Suira Logistics",
    location: "Distribution Center, City",
    type: "Full-time",
    description:
      "Optimize logistics operations and improve supply chain efficiency",
  },
  {
    id: 4,
    title: "Marketing Executive",
    company: "Suira Foods",
    location: "HQ, City",
    type: "Full-time",
    description: "Drive brand growth and market expansion strategies",
  },
  {
    id: 5,
    title: "Fashion Designer",
    company: "Suira Textiles",
    location: "Design Studio, City",
    type: "Full-time",
    description:
      "Create innovative and sustainable textile designs for global markets",
  },
  {
    id: 6,
    title: "HR Specialist",
    company: "Suira Group",
    location: "Head Office, City",
    type: "Full-time",
    description: "Build and nurture our diverse and talented workforce",
  },
];

const Career: React.FC = () => {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<(typeof careers)[0] | null>(
    null,
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
    resume: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  AOS.init();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };

  const handleApplyClick = (job: (typeof careers)[0]) => {
    setSelectedJob(job);
    setFormData((prev) => ({
      ...prev,
      position: job.title,
    }));
    setShowApplyForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        position: "",
        message: "",
        resume: null,
      });
      setShowApplyForm(false);
      setSelectedJob(null);
      setSubmitted(false);
    }, 2000);
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





  const headingRef2 = useRef<HTMLHeadingElement | null>(null);
  const splitInstance2 = useRef<any>(null);
  const paragraphRef2 = useRef<HTMLParagraphElement | null>(null);
  const lineRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!headingRef2.current) return;

    splitInstance2.current = new SplitType(headingRef2.current, { types: "chars" });
    const chars = splitInstance2.current.chars;

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

    observer.observe(headingRef2.current);

    return () => {
      observer.disconnect();
      splitInstance2.current?.revert();
    };
  }, []);

  useEffect(() => {
    if (!paragraphRef2.current) return;

    gsap.set(paragraphRef2.current, { opacity: 0, y: 40 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(paragraphRef2.current, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            });
          } else {
            gsap.set(paragraphRef2.current, { opacity: 0, y: 40 });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(paragraphRef2.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lineRef2.current) return;

    gsap.set(lineRef2.current, { scaleX: 0 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(lineRef2.current, {
              scaleX: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.3,
            });
          } else {
            gsap.set(lineRef2.current, { scaleX: 0 });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(lineRef2.current);

    return () => observer.disconnect();
  }, []);


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-amber-600 to-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative section-container text-center">
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
              Join Our Team
            </motion.h1>
            <motion.p
              ref={paragraphRef}
              variants={itemVariants}
              className="text-lg opacity-90 max-w-2xl mx-auto"
            >
              Explore exciting career opportunities across Suira Group companies
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-container py-16 md:py-24">
        {/* Apply Form Section */}
        {showApplyForm && (
          <div className="mb-16 p-8 bg-secondary border border-primary rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-foreground">
                Apply Now: {selectedJob?.title}
              </h2>
              <button
                onClick={() => setShowApplyForm(false)}
                className="text-2xl font-bold text-primary hover:text-primary/80"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    placeholder="Your name"
                  />
                </div>

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
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                  placeholder="Tell us why you're interested in this position..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Upload Resume/CV *
                </label>
                <div className="flex items-center justify-center border-2 border-dashed border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="text-center">
                    <Upload size={32} className="mx-auto text-primary mb-2" />
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="sr-only"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <span className="text-primary font-semibold">
                        Click to upload
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        or drag and drop
                      </span>
                    </label>
                    <p className="text-xs text-muted-foreground mt-2">
                      PDF, DOC, or DOCX (Max 5MB)
                    </p>
                    {formData.resume && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {formData.resume.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Submit Application
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                  ✓ Application submitted successfully! We'll review your
                  application and get back to you soon.
                </div>
              )}
            </form>
          </div>
        )}

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            ref={headingRef2}
            className="text-4xl font-bold text-foreground mb-4"
          >
            Current Opportunities
          </h2>
          <div
            ref={lineRef2}
            className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full mx-auto mb-6"
            style={{ transformOrigin: "center" }}
          ></div>
          <p
            ref={paragraphRef2}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover positions across all Suira Group companies
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 gap-6">
          {careers.map((job, index) => {
            const jobImages: Record<number, string> = {
              1: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
              2: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
              3: "https://images.unsplash.com/photo-1453460892917-8b9b7681eaea?w=400&h=300&fit=crop",
              4: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
              5: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
              6: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            };
            return (
              <div
                key={job.id}
                className="overflow-hidden bg-white border border-border rounded-xl hover-lift transition-all slide-up"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 h-48 md:h-full overflow-hidden">
                    <img
                      src={jobImages[job.id]}
                      alt={job.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <p className="text-primary font-semibold mb-3">
                        {job.company}
                      </p>

                      <div className="flex flex-wrap gap-6 mb-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-primary" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase size={18} className="text-primary" />
                          {job.type}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {job.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap w-fit"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-secondary rounded-xl p-8 md:p-12" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Join Suira Group?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Benefits",
                desc: "Attractive salary, health insurance, and retirement plans",
              },
              {
                title: "Career Growth",
                desc: "Continuous learning and development opportunities",
              },
              {
                title: "Diverse Culture",
                desc: "Work with talented professionals from around the world",
              },
              {
                title: "Innovation Focus",
                desc: "Be part of cutting-edge projects and initiatives",
              },
              {
                title: "Work-Life Balance",
                desc: "Flexible working arrangements and time off",
              },
              {
                title: "Social Impact",
                desc: "Contribute to meaningful projects that create positive change",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">
                  {["💰", "📈", "👥", "🚀", "⚖️", "🌍"][index]}
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
