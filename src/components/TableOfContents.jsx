// src/components/TableOfContents.jsx
import { XMarkIcon } from '@heroicons/react/24/solid';
import useCatechismData from '../hooks/useCatechismData';
import '../styles/TableOfContents.css';
import { useState } from 'react';

const TableOfContents = ({ onClose, onSelect }) => {
  const { catechismData, loading, error } = useCatechismData();
  const [searchText, setSearchText] = useState('');

  // 필터링: 질문 및 답변에서 검색 (대소문자 구분 없음)
  const filteredData = catechismData.filter((item) =>
    item.question.toLowerCase().includes(searchText.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) return <p className="toc-loading">데이터 로딩 중...</p>;
  if (error) return <p className="toc-error">오류 발생: {error}</p>;

  return (
    <div className="toc-overlay">
      <div className="toc-modal">

        <div className="toc-header">
          <h2>목차 탐색기</h2>
          <button className="toc-close-btn" onClick={onClose} aria-label="닫기">
            <XMarkIcon className="icon-md" />
          </button>
        </div>

        {/* 인터랙티브 검색 바 */}
        <div className="toc-search-container">
          <input
            type="text"
            placeholder="🔍 질문 검색..."
            className="toc-search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <ul className="toc-list">
          {filteredData.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                onSelect(item.id); // 선택한 문항의 페이지로 이동 & 스크롤 적용
                onClose();
              }}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => e.key === 'Enter' && (onSelect(item.id), onClose())}
            >
              <span className="toc-item-number">문 {item.id}.</span>
              <span className="toc-item-question">{item.question}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
