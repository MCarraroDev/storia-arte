import { useState, useEffect } from 'react'
import './App.css'
import type { Section } from './types'
import { paleocristianoContent } from './data/paleocristiano'
import { bizantinoContent } from './data/bizantino'
import { romanicoContent } from './data/romanico'

function App() {
  const [activeSection, setActiveSection] = useState<string>('paleocristiana');
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // Effetto per animazione di ingresso all'avvio della pagina
  useEffect(() => {
    document.body.classList.add('loaded');
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  // Dati delle sezioni
  const sections: Section[] = [
    paleocristianoContent,
    bizantinoContent,
    romanicoContent
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const activeContent = sections.find(section => section.id === activeSection);

  return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          <h1>Storia dell'Arte</h1>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${showMenu ? 'active' : ''}`}></div>
        </div>
      </header>

      <div className={`navigation ${showMenu ? 'show' : ''}`}>
        <nav>
          <ul>
            {sections.map(section => (
              <li 
                key={section.id} 
                className={section.id === activeSection ? 'active' : ''}
                onClick={() => {
                  setActiveSection(section.id);
                  setShowMenu(false);
                }}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main>
        {activeContent && (
          <section className="content-section">
            <h2 className="section-title">{activeContent.title}</h2>
            <div className="content-blocks">
              {activeContent.content.map((block, index) => {
                switch(block.type) {
                  case 'paragraph':
                    return <p key={index} className="content-paragraph">{block.content}</p>;
                  case 'subtitle':
                    return <h3 key={index} className="content-subtitle">{block.content}</h3>;
                  case 'image':
                    return (
                      <div key={index} className="content-image-container">
                        <img src={block.imageUrl} alt={block.content} className="content-image" />
                        <p className="image-caption">{block.content}</p>
                      </div>
                    );
                  case 'list':
                    return (
                      <div key={index} className="content-list-container">
                        <h4 className="list-title">{block.content}</h4>
                        <ul className="content-list">
                          {block.items?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>© 2025 - Marco Carraro</p>
      </footer>
    </div>
  )
}

export default App
