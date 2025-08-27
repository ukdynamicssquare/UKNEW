// components/NavBar.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBarBack() {
  const [navItems, setNavItems] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  const offset = 100; // Offset for scroll behavior
  const router = useRouter();
  const currentPage = router.pathname.replace('/', '') || 'solution-new'; // Default to 'home' if pathname is empty

  useEffect(() => {
    // Fetch navigation data
    const fetchNavItems = async () => {
      const response = await fetch('/data/navItems.json');
      const data = await response.json();
      setNavItems(data[currentPage] || []); // Use the current page to filter items
    };

    fetchNavItems();

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, currentPage]);

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
    <div className='nav-list'>
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
         top: 22px;
          max-width: 100%;
          z-index: 9999;
          margin: 0 auto;
        //   box-shadow: 0px 2px 3px rgb(0 0 0 / 16%);
        }
        .nav-list ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 30px;
          justify-content: center;
        }
           .nav-list ul li{
           position:relative
           }
          

        .nav-list ul li a {
          text-decoration: none;
          color: #924c72;
          transition: color 0.3s;
          font-size: 15px;
          font-weight:500
        }

        .nav-list ul li.active a {
          color: #b5101f  !important; 
            font-weight:500
        }
             .nav-list ul li.active a::after{
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
          font-weight:500
        }
          .nav-list a:hover::after{
              content: "";
    position: absolute;
        bottom: -26px;
    width: 100%;
    height: 2px;
    background: #924c72;
    left: 0;
    transition: .4s ease;

          }
          
          @media (max-width: 1200px) {
.nav-list{
top: 60px;
}

          }
          @media (min-width: 1200px) {
    .nav-list {
        max-width: 100%;
    }
}
              @media (min-width: 992px) {
    .nav-list {
      max-width: 100%;
    }
}
    
              @media (max-width: 992px) {
    .nav-list {
      display:none
    }
}
     `}</style>
    </div>
  );
}
