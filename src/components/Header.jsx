// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>웨스트민스터 소요리 문답</h1>
        <nav>
          <Link to="/">목록</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
