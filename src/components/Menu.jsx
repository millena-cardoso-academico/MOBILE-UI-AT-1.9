import { useState } from 'react';
import icone_usuario from '../images/icone_usuario.png';

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
        <h1 className="brand-title">Alquimia das Linhas</h1>
        <img src={icone_usuario} alt="User Icon" className="user-icon" />
      </div>
      {isExpanded && (
        <ul className="menu-options">
          <li>Sobre nós</li>
          <li>Loja</li>
          <li>Novidades</li>
          <li>Contato</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;