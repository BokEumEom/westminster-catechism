// src/components/TableOfContents.jsx
import { catechismData } from '../data/catechismData';

const TableOfContents = ({ onClose, onSelect }) => {
  return (
    <div className="toc-overlay">
      <div className="toc-modal">
        <h2>목차</h2>
        <ul>
          {catechismData.map((item) => (
            <li key={item.id} onClick={() => { onSelect(item.id); onClose(); }}>
              문{item.id}. {item.question}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default TableOfContents;
