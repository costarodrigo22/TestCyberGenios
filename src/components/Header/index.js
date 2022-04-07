import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Container } from './styles';

import iconMenu from '../../assets/images/iconMenu.svg';
import menu from '../../assets/images/menu.svg';

export default function Header() {
  // Estado referente a ativação do menu no Mobile.
  // Valor inicia como false, pois o menu iniciará fechado.
  const [activeMenu, setActiveMenu] = useState(false);

  // Função que seta o valor de activeMenu para true e abre o menu
  function handleOpenMenu() {
    setActiveMenu(true);
  }

  // Função que seta o valor de activeMenu para false e fecha o menu
  function handlecloseMenu() {
    setActiveMenu(false);
  }

  return (
    <Container active={activeMenu}>
      <button className="btn-active" type="button" onClick={handleOpenMenu}>
        <img className="menu-mobile" src={menu} alt="menu" />
      </button>
      <nav>
        <img onClick={handlecloseMenu} src={iconMenu} alt="icon" />
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Tabela</li>
          <li>Fale conosco</li>
          <li>Entrar</li>
          <Icon className="icon-home" icon="ri:user-line" color="white" />
        </ul>
      </nav>
    </Container>
  );
}
