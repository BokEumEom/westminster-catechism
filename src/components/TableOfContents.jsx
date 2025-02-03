// src/components/TableOfContents.jsx
import { XMarkIcon } from '@heroicons/react/24/solid';
import useCatechismData from '../hooks/useCatechismData';
import '../styles/TableOfContents.css';

const TableOfContents = ({ onClose, onSelect }) => {
  const { catechismData, loading, error } = useCatechismData();

  if (loading) return <p className="toc-loading">데이터 로딩 중...</p>;
  if (error) return <p className="toc-error">오류 발생: {error}</p>;

  return (
    <div className="toc-overlay">
      <div className="toc-modal">
        <div className="toc-header">
          <h2>목차</h2>
          <button className="toc-close-btn" onClick={onClose} aria-label="닫기">
            <XMarkIcon className="icon-md" />
          </button>
        </div>
        <ul className="toc-list">
          {catechismData.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                onSelect(item.id);
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
