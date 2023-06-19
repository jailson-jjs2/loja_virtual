import { Link } from 'react-router-dom'

import { HeaderBar, LinkCarrinho, Links, LinksItem } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

/* COLOCANDO LOGO O ( NA FUNÇÃO JA INDICA O RETORNO */
const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinksItem>
            <Link to="/categories">Categorias</Link>
          </LinksItem>
          <LinksItem>
            <a href="#">Novidades</a>
          </LinksItem>
          <LinksItem>
            <a href="#">Promoções</a>
          </LinksItem>
        </Links>
      </nav>
    </div>
    <LinkCarrinho href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCarrinho>
  </HeaderBar>
)

export default Header
