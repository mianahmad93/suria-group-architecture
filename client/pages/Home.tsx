import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion, Variants, useScroll, useTransform, useInView, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import SplitType from "split-type";
import { gsap } from "gsap";
import "./CompaniesSection.scss";
import { ChevronRight, Code, Building, Utensils, Truck, Shirt, } from "lucide-react";
import styles from './VenturesSection.module.css';
const COLORS_TOP = ["#C2410C", "#EA580C", "#F97316", "#FB923C"];
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

  // Image map for completed ventures
  const completedVentureImages: Record<number, string> = {
    4: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    5: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
  };

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

      <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
            Completed <motion.span className="text-amber-400">Ventures</motion.span>
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-12 gap-4 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {completed.map((venture, index) => (
            <BounceCard
              key={venture.id}
              className={index === 0 ? "col-span-12 md:col-span-6 bg-[#c46a05]" : "col-span-12 md:col-span-6 bg-[#c46a05]"}
            >
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-start md:justify-between gap-2 md:gap-3 mb-3 md:mb-4">
                  <h3 className="flex-1 min-w-0 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
                    {venture.title}
                  </h3>
                  <span className="px-2.5 py-0.5 md:px-3 md:py-1 bg-white/20 text-white rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap shrink-0">
                    Completed
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-white/90 flex items-center gap-1">
                  <span>📍</span> {venture.location}
                </p>
              </div>

              <div className="absolute bottom-0 left-4 right-4 top-24 sm:top-28 md:top-32 translate-y-8 rounded-t-xl md:rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
                <motion.img
                  src={completedVentureImages[venture.id]}
                  alt={venture.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </BounceCard>
          ))}
        </motion.div>

       
      </section>
    </section>
  );
};


const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      whileHover={{ scale: 0.95, rotate: "-1deg", y: -4 }}
      className={`group relative min-h-[260px] md:min-h-[320px] cursor-pointer overflow-hidden rounded-2xl  p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};





export const CallToActionSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-[600px] md:min-h-[700px] place-content-center overflow-hidden bg-gray-950 px-4 py-16 md:py-24 text-gray-200"
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full bg-gray-600/50 px-4 py-2 text-sm md:text-base backdrop-blur-sm"
        >
          Join Our Growing Network
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent leading-tight"
        >
          Ready to Partner with Suira Group?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-center text-gray-300 max-w-2xl mx-auto mb-8 px-4 leading-relaxed"
        >
          Whether you're interested in joining our team, exploring business
          opportunities, or getting in touch with our leadership, we'd love to
          hear from you.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4"
        >
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex items-center justify-center gap-2 rounded-full bg-white/90 px-6 md:px-8 py-3 md:py-4 text-gray-900 font-semibold transition-colors hover:bg-white text-sm md:text-base backdrop-blur-sm"
          >
            Get In Touch
            <svg 
              className="w-4 h-4 transition-transform group-hover:-rotate-45 group-active:-rotate-12" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
          
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex items-center justify-center gap-2 rounded-full bg-gray-950/10 px-6 md:px-8 py-3 md:py-4 text-gray-50 font-semibold transition-colors hover:bg-gray-950/50 text-sm md:text-base backdrop-blur-sm"
          >
            View Careers
            <svg 
              className="w-4 h-4 transition-transform group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
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