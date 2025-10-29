import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion, Variants, useScroll, useTransform, useInView } from "framer-motion";
import SplitType from "split-type";
import { gsap } from "gsap";
import "./CompaniesSection.scss";
import { ChevronRight, Code, Building, Utensils, Truck, Shirt, } from "lucide-react";
import styles from './VenturesSection.module.css';

const companies = [
  {
    id: 1,
    name: "Suira Technologies",
    description:
      "Delivering cutting-edge digital transformation, AI-powered solutions, and scalable enterprise software that drives innovation and efficiency across industries.",
    icon: Code,
    href: "/companies/technologies",
  },
  {
    id: 2,
    name: "Suira Constructions",
    description:
      "Building a stronger tomorrow through world-class infrastructure, commercial projects, and sustainable construction technologies that redefine skylines.",
    icon: Building,
    href: "/companies/constructions",
  },
  {
    id: 3,
    name: "Suira Foods",
    description:
      "Creating premium food and beverage experiences with an unwavering commitment to quality, freshness, and nutrition — bringing taste and trust together.",
    icon: Utensils,
    href: "/companies/foods",
  },
  {
    id: 4,
    name: "Suira Logistics",
    description:
      "Providing intelligent logistics and supply chain management that ensures seamless delivery, efficiency, and reliability from origin to destination.",
    icon: Truck,
    href: "/companies/logistics",
  },
  {
    id: 5,
    name: "Suira Textiles",
    description:
      "Designing sustainable textiles and fashion solutions that merge craftsmanship, innovation, and environmental responsibility for a better future.",
    icon: Shirt,
    href: "/companies/textiles",
  },
];


const ventures: Venture[] = [
  {
    id: 1,
    title: "Smart City Development",
    status: "ongoing",
    location: "Metropolitan Area",
    progress: 65,
    image: "🏙️",
  },
  {
    id: 2,
    title: "Eco-Friendly Manufacturing Hub",
    status: "ongoing",
    location: "Industrial Zone",
    progress: 45,
    image: "🏭",
  },
  {
    id: 3,
    title: "Eco-Friendly Manufacturing Hub",
    status: "ongoing",
    location: "Industrial Zone",
    progress: 85,
    image: "🏭",
  },

  {
    id: 4,
    title: "Digital Transformation Initiative",
    status: "completed",
    location: "Multiple Locations",
    progress: 100,
    image: "💻",
  },
  {
    id: 5,
    title: "Green Energy Solar Farm",
    status: "completed",
    location: "Rural District",
    progress: 100,
    image: "☀️",
  },
];




type Venture = {
  id: number;
  title: string;
  status: 'ongoing' | 'completed';
  location?: string;
  progress?: number; // 0-100
  image?: string;
};

const imgMap: Record<number, string> = {
  1: 'https://cdn.builder.io/api/v1/image/assets%2F1453fc3140134efc8736573bb805caf2%2Fd821e4eed9fe43dcba9090b34ed22eda?format=webp&width=400',
  2: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop',
  3: 'https://cdn.builder.io/api/v1/image/assets%2F1453fc3140134efc8736573bb805caf2%2Fd821e4eed9fe43dcba9090b34ed22eda?format=webp&width=400',
};

const anim: Variants = {
  open: {
    width: "14vw",
    minWidth: "150px",
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  closed: {
    width: "0vw",
    opacity: 0,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};



const HeroSection: React.FC = () => {
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

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-primary via-amber-600 to-primary text-white overflow-hidden">
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
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative section-container py-20 md:py-32 flex flex-col justify-center items-center text-center">
        <motion.div
          className="space-y-6 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            ref={headingRef}
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Building the Future with
            <span className="block text-blue-100">Innovation and Trust</span>
          </motion.h1>
          <motion.p
            ref={paragraphRef}
            variants={itemVariants}
            className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
          >
            Suira Group brings together diverse business ventures spanning
            technology, construction, food, logistics, and textiles. Discover
            how we drive growth and innovation across industries.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Link
                to="/companies/technologies"
                className="btn-primary inline-block text-center bg-white text-primary hover:bg-secondary hover:scale-105 transform transition-all duration-300"
              >
                Explore Our Companies
              </Link>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Link
                to="/contact"
                className="btn-secondary inline-block text-center border-none text-white hover:bg-white hover:text-primary hover:scale-105 transform transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};




const AboutPreviewSection: React.FC = () => {
  const [textInView, setTextInView] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTextInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const textRevealAnimation: any = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
    })
  };

  const rightVariants: any = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleLines = ["About Suira Group"];
  const paragraph1Lines = [
    "Suira Group is a dynamic conglomerate committed to creating value",
    "through innovation, quality, and strategic partnerships. With",
    "operations across multiple sectors, we leverage our collective",
    "expertise to drive sustainable growth and positive impact."
  ];
  const missionLines = ["Our Mission"];
  const missionDescLines = [
    "To deliver exceptional value through innovative solutions and",
    "responsible business practices."
  ];
  const visionLines = ["Our Vision"];
  const visionDescLines = [
    "To be a leading diversified business group recognized for",
    "excellence, integrity, and positive societal impact."
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div ref={textRef} className="space-y-6">

          <div>
            <div className="overflow-hidden">
              {titleLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.h2
                    custom={index}
                    variants={textRevealAnimation}
                    initial="initial"
                    animate={textInView ? "enter" : "initial"}
                    className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}
            </div>
            <motion.div
              custom={1}
              variants={textRevealAnimation}
              initial="initial"
              animate={textInView ? "enter" : "initial"}
              className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full"
            ></motion.div>
          </div>

          <div>
            {paragraph1Lines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.p
                  custom={index + 2}
                  variants={textRevealAnimation}
                  initial="initial"
                  animate={textInView ? "enter" : "initial"}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              {missionLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.h4
                    custom={index + 6}
                    variants={textRevealAnimation}
                    initial="initial"
                    animate={textInView ? "enter" : "initial"}
                    className="font-semibold text-primary mb-2"
                  >
                    {line}
                  </motion.h4>
                </div>
              ))}
              {missionDescLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.p
                    custom={index + 7}
                    variants={textRevealAnimation}
                    initial="initial"
                    animate={textInView ? "enter" : "initial"}
                    className="text-muted-foreground"
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>

            <div>
              {visionLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.h4
                    custom={index + 9}
                    variants={textRevealAnimation}
                    initial="initial"
                    animate={textInView ? "enter" : "initial"}
                    className="font-semibold text-primary mb-2"
                  >
                    {line}
                  </motion.h4>
                </div>
              ))}
              {visionDescLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.p
                    custom={index + 10}
                    variants={textRevealAnimation}
                    initial="initial"
                    animate={textInView ? "enter" : "initial"}
                    className="text-muted-foreground"
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.a
              custom={12}
              variants={textRevealAnimation}
              initial="initial"
              animate={textInView ? "enter" : "initial"}
              href="/about"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More
            </motion.a>
          </div>
        </div>

        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative h-96 bg-gradient-to-br from-secondary to-blue-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
            alt="Suira Group Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-white opacity-40">SG</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};








const CompaniesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, margin: "-50px" });

  const textVariant: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section ref={sectionRef}>
      <div className="text-center mb-16 slide-up" ref={textRef}>
        <motion.div
          className="animated-text-container"
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="animated-text-body" variants={textVariant}>
            <p className="animated-line">
              <motion.span variants={textVariant}>Our</motion.span>{" "}
              <motion.span variants={textVariant}>Companies</motion.span>
            </p>
          </motion.div>
          <motion.div
            className="animated-divider w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mx-auto my-4"
            variants={textVariant}
          ></motion.div>

          <motion.div
            className="animated-text-body paragraph"
            variants={textVariant}
          >
            <p>
              <motion.span variants={textVariant}>
                A diverse portfolio of enterprises leading innovation,
                sustainability, and excellence across multiple sectors.
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {companies.map((company, i) => {
        const range = [i / companies.length, (i + 1) / companies.length];
        const scale = useTransform(scrollYProgress, range, [1, 0.9]);
        const imageScale = useTransform(scrollYProgress, range, [1.4, 1]);

        const companyImages = {
          1: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
          2: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
          3: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
          4: "https://cdn.builder.io/api/v1/image/assets%2F1453fc3140134efc8736573bb805caf2%2F0fbbb0ba4d2d46fe9f093d04981ffb25?format=webp&width=800",
          5: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        };

        const Icon = company.icon;

        return (
          <div key={company.id} className="cardContainer">
            <motion.div
              className="card"
              style={{
                scale,
                backgroundColor: "#b5651d",
                color: "#fff",
                top: `calc(-5vh + ${i * 25}px)`,
              }}
            >
              <div className="body">
                <div className="imageContainer">
                  <motion.div className="inner" style={{ scale: imageScale }}>
                    <img
                      src={companyImages[company.id]}
                      alt={company.name}
                      className="companyImage"
                    />
                  </motion.div>
                </div>

                <div className="description">
                  <div className="iconContainer">
                    <div className="iconBg">
                      <Icon size={36} />
                    </div>
                  </div>

                  <h2>{company.name}</h2>
                  <p>{company.description}</p>

                  <span>
                    <a
                      style={{ textDecoration: "none" }}
                      href={company.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 mt-3 text-sm font-semibold text-white no-underline bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg transition-all duration-300 hover:from-amber-500 hover:to-orange-600 hover:shadow-amber-300/30 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300"
                    >
                      Learn More
                      <ChevronRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>


                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

const VentureRow: React.FC<{ venture: Venture }> = ({ venture }) => {
  const [isActive, setIsActive] = useState(false);
  const { title, location, progress, id, status } = venture;

  return (
    <div
      className={styles.venture}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >

      <p className={styles.leftTitle}>{title}</p>


      <motion.div
        className={styles.imgContainer}
        variants={anim}
        initial="closed"
        animate={isActive ? "open" : "closed"}
      >
        <img
          src={imgMap[id] ?? "/medias/default.jpg"}
          alt={title}
          className={styles.img}
        />
      </motion.div>


      <div className={styles.rightBlock}>
        <p className={styles.rightTitle}>
          {status === "completed"
            ? "✅ Completed"
            : `${progress ?? 0}% Progress`}
        </p>

        <div className={styles.meta}>
          {location && <span className={styles.location}>📍 {location}</span>}

          {status === "ongoing" && typeof progress === "number" && (
            <div className={styles.progressWrap}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${Math.max(0, Math.min(100, progress))}%`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const VenturesSection: React.FC = () => {
  const textVariant: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const ongoing = ventures.filter((v: Venture) => v.status === 'ongoing');
  const completed = ventures.filter((v: Venture) => v.status === 'completed');

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, margin: "-100px" });

  return (
    <section className={` ${styles.section_containers} py-16  md:py-24`}>
      <div className="text-center mb-16 slide-up" ref={textRef}>
        <motion.div
          className="animated-text-container"
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div className="animated-text-body" variants={textVariant}>
            <p className="animated-line text-4xl md:text-5xl font-bold mb-4">
              <motion.span variants={textVariant}>Our</motion.span>{" "}
              <motion.span variants={textVariant}>Ventures</motion.span>
            </p>
          </motion.div>

          {/* Gradient Line */}
          <motion.div
            className="animated-divider w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mx-auto my-4"
            variants={textVariant}
          ></motion.div>

          {/* Paragraph */}
          <motion.div
            className="animated-text-body paragraph"
            variants={textVariant}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <motion.span variants={textVariant}>
                Showcasing our ongoing and completed projects across diverse
                sectors.
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="mb-12 ">
        <h3 className="text-2xl font-bold mb-6 px-5 text-amber-700">Ongoing Ventures</h3>
        <div className={styles.list}>
          {ongoing.map((v: Venture) => (
            <VentureRow key={v.id} venture={v} />)
          )}
        </div>
      </div>

      <div className={styles.Complete_venture}>
        <h3 className="text-2xl font-bold mb-8">Completed Ventures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {completed.map((venture) => {
            const ventureImages: Record<number, string> = {
              3: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
              4: "https://images.unsplash.com/photo-1509391366360-2e938d440220?w=600&h=400&fit=crop",
            };
            return (
              <div
                key={venture.id}
                className="bg-white border border-border rounded-xl overflow-hidden hover-lift transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={ventureImages[venture.id]}
                    alt={venture.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground">
                      {venture.title}
                    </h4>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    📍 {venture.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-amber-600 text-white py-16 md:py-24">
      <div className="section-container text-center space-y-8 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Partner with Suira Group?
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Whether you're interested in joining our team, exploring business
          opportunities, or getting in touch with our leadership, we'd love to
          hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Get In Touch
          </Link>
          <Link
            to="/career"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all inline-block"
          >
            View Careers
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <Layout>
      <HeroSection />
      <AboutPreviewSection />
      <CompaniesSection />
      <VenturesSection />
      <CallToActionSection />
    </Layout>
  );
};
export default Home;