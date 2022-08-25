import { HeaderContainer } from './styles';
import logoControle from '../../assets/logo-controle.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logoControle} alt="" />
        <span>Controle Financeiro</span>
      </div>

      <nav>
        <NavLink to={'/'}>Cadastro de Transações</NavLink>
        <span>|</span>
        <NavLink to={'/'}>Limpar Dados</NavLink>
      </nav>
    </HeaderContainer>
  );
};
