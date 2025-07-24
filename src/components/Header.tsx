import { useState, useEffect } from 'react';
const Header = () => {
  const [activeSection, setActiveSection] = useState('about');
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const navItems = [{
    id: 'about',
    label: 'About'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Dileep</div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`transition-colors duration-300 ${activeSection === item.id ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}>
                {item.label}
              </button>)}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>;
};
export default Header;