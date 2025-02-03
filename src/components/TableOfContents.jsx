// src/components/TableOfContents.jsx
import { catechismData } from '../data/catechismData';
import { XMarkIcon } from '@heroicons/react/24/solid';
import '../styles/TableOfContents.css';

const TableOfContents = ({ onClose, onSelect }) => {
  return (
    <div className="toc-overlay">
      <div className="toc-modal">
        <div className="toc-header">
          <h2>목차</h2>
          <button 
            className="toc-close-btn" 
            onClick={onClose} 
            aria-label="닫기"
          >
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
              onKeyDown={(e) => 
                e.key === 'Enter' && (onSelect(item.id), onClose())
              }
            >
              <span className="toc-item-number">문{item.id}.</span>
              <span className="toc-item-question">{item.question}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;