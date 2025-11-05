import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";


interface DropdownItem {
  label: string;
  href: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}



const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const dropdowns: Record<string, NavDropdown> = {
    about: {
      label: "About",
      items: [
        { label: "About Suira Group", href: "/about" },
        { label: "Career", href: "/career" },
        { label: "News", href: "/news" },
        { label: "Lead Form", href: "/lead-form" },
      ],
    },
    companies: {
      label: "Companies",
      items: [
        { label: "Suira Technologies", href: "/companies/technologies" },
        { label: "Suira Constructions", href: "/companies/constructions" },
        { label: "Suira Foods", href: "/companies/foods" },
        { label: "Suira Logistics", href: "/companies/logistics" },
        { label: "Suira Textiles", href: "/companies/textiles" },
      ],
    },
    ventures: {
      label: "Our Ventures",
      items: [
        { label: "Completed Ventures", href: "/ventures/completed" },
        { label: "Ongoing Ventures", href: "/ventures/ongoing" },
      ],
    },
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (href: string) => location.pathname === href;


  

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-slate-900 transition-colors">
      <nav className="section-container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
          <img src="/suria-logo.webp" alt="Suira Group" className="h-8 w-auto" />
          <span className="text-xl font-semibold tracking-wide">Suira Group</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              isActive("/")
                ? "text-primary bg-secondary"
                : "text-foreground hover:text-primary",
            )}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary flex items-center gap-1 transition-colors">
              {dropdowns.about.label}
              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition-transform"
              />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {dropdowns.about.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Companies Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("companies")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary flex items-center gap-1 transition-colors">
              {dropdowns.companies.label}
              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition-transform"
              />
            </button>
            <div className="absolute left-0 mt-0 w-52 bg-white dark:bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {dropdowns.companies.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ventures Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("ventures")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary flex items-center gap-1 transition-colors">
              {dropdowns.ventures.label}
              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition-transform"
              />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {dropdowns.ventures.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              isActive("/contact")
                ? "text-primary bg-secondary"
                : "text-foreground hover:text-primary",
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} className="text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-t border-border">
          <div className="section-container py-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("about")}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary flex items-center justify-between transition-colors"
              >
                {dropdowns.about.label}
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform",
                    activeDropdown === "about" && "rotate-180",
                  )}
                />
              </button>
              {activeDropdown === "about" && (
                <div className="pl-4 space-y-1">
                  {dropdowns.about.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Companies Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("companies")}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary flex items-center justify-between transition-colors"
              >
                {dropdowns.companies.label}
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform",
                    activeDropdown === "companies" && "rotate-180",
                  )}
                />
              </button>
              {activeDropdown === "companies" && (
                <div className="pl-4 space-y-1">
                  {dropdowns.companies.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Ventures Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("ventures")}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary flex items-center justify-between transition-colors"
              >
                {dropdowns.ventures.label}
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform",
                    activeDropdown === "ventures" && "rotate-180",
                  )}
                />
              </button>
              {activeDropdown === "ventures" && (
                <div className="pl-4 space-y-1">
                  {dropdowns.ventures.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div >
            <h3 className="text-xl font-bold mb-4">Suira Group</h3>
            <p className="text-sm opacity-90">
              Building the Future with Innovation and Trust
            </p>
          </div>

          {/* Quick Links */}
          <div >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/companies/technologies"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  to="/ventures/completed"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Ventures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Email: info@suiragroup.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business Ave, City, State</li>
            </ul>
          </div>

          {/* Social Links */}
          <div >
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm opacity-90" >
              © 2025 Suira Group. All rights reserved.
            </p>
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="mt-4 md:mt-0 flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Scroll to Top
                <ArrowUp size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/companies/");



  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;