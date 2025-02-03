// src/components/CatechismAccordionItem.jsx
import { useState } from 'react';

const CatechismAccordionItem = ({ item, idRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item" ref={idRef}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>문{item.id}. {item.question}</h2>
        <button className="accordion-toggle">
          {isOpen ? '닫기' : '열기'}
        </button>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{item.answer}</p>
          {item.bibleVerse && (
            <div className="bible-verse">
              <strong>성경 구절:</strong>
              <p>{item.bibleVerse}</p>
            </div>
          )}
          {item.relatedBibleVerses && item.relatedBibleVerses.length > 0 && (
            <div className="related-bible-verses">
              <h3>관련 성경 구절</h3>
              <ul>
                {item.relatedBibleVerses.map((verse, index) => (
                  <li key={index}>{verse}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CatechismAccordionItem;
