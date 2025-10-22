import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  // React is needed for JSX
  React;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>LandscapeHelper</h4>
            <p>Автоматизация ландшафтного проектирования в Archicad</p>
          </div>
          <div className="footer-section">
            <h4>Документация</h4>
            <ul>
              <li><Link to="/docs">Установка</Link></li>
              <li><Link to="/docs">Быстрый старт</Link></li>
              <li><Link to="/docs">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Помощь</h4>
            <ul>
              <li><Link to="/help/orientation">Ориентация</Link></li>
              <li><Link to="/help/distribution">Распределение</Link></li>
              <li><Link to="/help/ground">Приземление</Link></li>
              <li><Link to="/help/gdl">GDL</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Ресурсы</h4>
            <ul>
              <li><Link to="/download">Скачать</Link></li>
              <li><Link to="/examples">Помощь</Link></li>
              <li><Link to="/payment">Оплата</Link></li>
              <li><a href="https://227.info" target="_blank" rel="noopener noreferrer">227.info</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LandscapeHelper. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
