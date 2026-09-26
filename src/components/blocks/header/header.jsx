import React from 'react';
import Logo from '../../ui/logo/logo';
import './style.css';

function Header({ activeSection, onScrollToSection, isScrolled }) {
  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О себе' },
    { id: 'skills', label: 'Навыки' },
    { id: 'contact', label: 'Контакты' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Logo onClick={() => onScrollToSection('home')} />
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection(item.id);
                }}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="resume-actions">
            <a
              href="/images/CV/Shahrom_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn view"
            >
              Резюме
            </a>

            {/* ⬇ Скачать — скачивает файл */}
            <a
              href="/images/CV/Shahrom_CV.pdf"
              download="CV_Sharipov_Zikriolloh.pdf"
              className="resume-btn download"
            >
              ⬇ 
            </a>
          </li>
        
        </ul>
      </div>
    </nav>
  );
}

export default Header;
