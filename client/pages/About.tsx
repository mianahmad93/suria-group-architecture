import React, { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 5, label: "Companies", suffix: "+" },
    { number: 15, label: "Years Experience", suffix: "+" },
    { number: 1000, label: "Employees", suffix: "+" },
    { number: 50, label: "Active Projects", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            stats.forEach((stat, index) => {
              let start = 0;
              const end = stat.number;
              const duration = 2000;
              const increment = end / (duration / 16);

              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = end;
                    return newCounts;
                  });
                  clearInterval(timer);
                } else {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(start);
                    return newCounts;
                  });
                }
              }, 16);
            });
          } else if (!entry.isIntersecting) {
            setHasAnimated(false);
            setCounts([0, 0, 0, 0]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);


 

  AOS.init();

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
              About Suira Group
            </motion.h1>
            <motion.p
              ref={paragraphRef}
              variants={itemVariants}
              className="text-lg opacity-90 max-w-2xl mx-auto"
            >
              Leading the way in innovation, integrity, and sustainable growth
              across multiple industries
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 overflow-hidden">
          <div data-aos="fade-right" className="relative overflow-hidden bg-white border border-border rounded-xl hover-lift transition-all group">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Our Mission"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional value through innovative solutions,
                responsible business practices, and strategic partnerships that
                drive sustainable growth across all our ventures.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="relative overflow-hidden bg-white border border-border rounded-xl hover-lift transition-all group">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Our Vision"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-6">
                👁️
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading diversified business group recognized globally
                for excellence, integrity, and positive impact on society,
                creating opportunities and prosperity for all stakeholders.
              </p>
            </div>
          </div>

          <div data-aos="fade-left"className="relative overflow-hidden bg-white border border-border rounded-xl hover-lift transition-all group">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Our Values"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-6">
                ⭐
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Values
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, innovation, excellence, sustainability, and customer
                focus. We believe in building trust through transparency and
                delivering quality in everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values List */}
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-secondary rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Integrity - Operating with honesty and transparency",
              "Innovation - Embracing change and driving progress",
              "Excellence - Pursuing quality in all endeavors",
              "Sustainability - Protecting our planet for future generations",
              "Collaboration - Working together for mutual success",
              "Customer Focus - Delivering exceptional value",
            ].map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-container py-16 md:py-24 overflow-hidden">
        <h2 data-aos="zoom-in" className="text-4xl font-bold text-foreground mb-4 text-center">
          Our Journey
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mx-auto mb-16"></div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            {
              year: "2010",
              title: "Foundation",
              desc: "Suira Group was established with a vision to create value through diversified business ventures.",
            },
            {
              year: "2012",
              title: "First Expansion",
              desc: "Launched Suira Technologies, marking our entry into the digital transformation space.",
            },
            {
              year: "2015",
              title: "Portfolio Growth",
              desc: "Expanded with Suira Constructions and Suira Foods, diversifying our business portfolio.",
            },
            {
              year: "2018",
              title: "Logistics Integration",
              desc: "Acquired and integrated Suira Logistics to strengthen our supply chain capabilities.",
            },
            {
              year: "2020",
              title: "Textiles Division",
              desc: "Established Suira Textiles focusing on sustainable and innovative textile solutions.",
            },
            {
              year: "2024",
              title: "Market Leadership",
              desc: "Recognized as a leading diversified business group with presence across 5 major sectors.",
            },
          ].map((milestone, index) => (
            <div key={index} className="flex gap-6" data-aos="fade-up"
            data-aos-duration="3000">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                {index < 5 && <div className="w-1 h-16 bg-primary mt-4"></div>}
              </div>
              <div className="pt-2 pb-8">
                <div className="text-sm font-bold text-primary">
                  {milestone.year}
                </div>
                <h4 className="text-xl font-semibold text-foreground mt-2">
                  {milestone.title}
                </h4>
                <p className="text-muted-foreground mt-2">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex justify-center items-center"
            >
              <div className="relative flex flex-col items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary via-amber-600 to-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white opacity-90 text-center px-2">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default About;
