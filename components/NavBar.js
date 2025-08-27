// components/NavBar.js
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [navItems, setNavItems] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  const [isStuck, setIsStuck] = useState(false);

  const offset = 100;        // scroll spy offset for section highlighting
  const stickyTop = 22;      // MUST match the CSS `top` for sticky
  const router = useRouter();
  const currentPage = router.pathname.replace('/', '') || 'solution-new';

  const sentinelRef = useRef(null);

  useEffect(() => {
    // Fetch navigation data
    const fetchNavItems = async () => {
      const response = await fetch('/data/navItems.json');
      const data = await response.json();
      setNavItems(data[currentPage] || []);
    };
    fetchNavItems();

    // Scroll spy for active link
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const middleOfSection = sectionTop + sectionHeight / 2;
        if (window.scrollY >= middleOfSection - window.innerHeight / 2 - offset) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset, currentPage]);

  useEffect(() => {
    // Detect when navbar actually sticks (sentinel passes top boundary)
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel scrolls past the top + stickyTop, it stops intersecting
        setIsStuck(!entry.isIntersecting);
      },
      {
        // Push the top boundary down by stickyTop so "not intersecting" === stuck
        rootMargin: `-${stickyTop + 1}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [stickyTop]);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Sentinel MUST be immediately before the sticky element */}
      <div ref={sentinelRef} aria-hidden="true" style={{ height: 1 }} />

      <div className={`nav-list ${isStuck ? 'is-stuck' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
              <a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <style jsx>{`
          .nav-list {
            background-color: #ffffff;
            padding: 24px 10px;
            position: sticky;
            top: ${stickyTop}px;
            max-width: 100%;
            z-index: auto; /* default: no stacking boost */
            margin: 0 auto;
          }

          /* Apply z-index ONLY when stuck */
          .nav-list.is-stuck {
            z-index: 9999;
          }

          .nav-list ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 30px;
            justify-content: center;
          }

          .nav-list ul li {
            position: relative;
          }

          .nav-list ul li a {
            text-decoration: none;
            color: #924c72;
            transition: color 0.3s;
            font-size: 15px;
            font-weight: 500;
          }

          .nav-list ul li.active a {
            color: #b5101f !important;
            font-weight: 500;
          }

          .nav-list ul li.active a::after {
            content: "";
            position: absolute;
            bottom: -26px;
            width: 100%;
            height: 2px;
            background: #924c72;
            left: 0;
          }

          .nav-list a:hover {
            color: #b5101f !important;
            font-weight: 500;
          }

          .nav-list a:hover::after {
            content: "";
            position: absolute;
            bottom: -26px;
            width: 100%;
            height: 2px;
            background: #924c72;
            left: 0;
            transition: 0.4s ease;
          }

          @media (max-width: 1200px) {
            .nav-list {
              top: 60px;
            }
          }

          @media (max-width: 992px) {
            .nav-list {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
}
