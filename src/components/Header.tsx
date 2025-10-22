import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            LandscapeHelper
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/download">Скачать</Link></li>
            <li><Link to="/docs">Документация</Link></li>
            <li><Link to="/examples">Помощь</Link></li>
            <li><Link to="/payment">Оплата</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header






