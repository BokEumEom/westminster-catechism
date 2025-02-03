// src/components/Header.jsx
import '../styles/Header.css';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchText.trim()); // 공백 제거 후 검색 실행
  };

  return (
    <header className="header">
      <div className="container">
        <h1>웨스트민스터 소요리 문답</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="문답 검색..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" aria-label="검색">
            <MagnifyingGlassIcon className="icon-sm" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
