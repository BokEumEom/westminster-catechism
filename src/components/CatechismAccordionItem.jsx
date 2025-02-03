// src/components/CatechismAccordionItem.jsx
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, LightBulbIcon } from "@heroicons/react/24/solid"; // LightBulbIcon 추가
import '../styles/Accordion.css';

const CatechismAccordionItem = ({ item, idRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div 
      className="accordion-item" 
      ref={idRef}
      role="region"
      aria-labelledby={`accordion-header-${item.id}`}
    >
      <div 
        className="accordion-header" 
        onClick={toggleAccordion}
        role="button"
        tabIndex="0"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        id={`accordion-header-${item.id}`}
      >
        <h2 className="accordion-title">
          <span className="question-number">문{item.id}.</span>
          {item.question}
        </h2>
        <div className="accordion-indicator">
          {isOpen ? (
            <ChevronUpIcon className="icon-md" />
          ) : (
            <ChevronDownIcon className="icon-md" />
          )}
        </div>
      </div>
      {isOpen && (
        <div 
          className="accordion-content" 
          id={`accordion-content-${item.id}`}
          role="region"
        >
          <div className="answer-section">
            <p className="answer-text">{item.answer}</p>
          </div>

          {item.bibleVerse && (
            <div className="scripture-block primary-verse">
              <div className="scripture-header">
                <LightBulbIcon className="scripture-icon" /> {/* LightBulbIcon으로 변경 */}
                <h3 className="scripture-title">핵심 성구</h3>
              </div>
              <p className="scripture-text">{item.bibleVerse}</p>
            </div>
          )}

          {item.relatedBibleVerses?.length > 0 && (
            <div className="scripture-block related-verses">
              <div className="scripture-header">
                <LightBulbIcon className="scripture-icon" /> {/* LightBulbIcon으로 변경 */}
                <h3 className="scripture-title">관련 성경 구절</h3>
              </div>
              <ul className="verse-list">
                {item.relatedBibleVerses.map((verse, index) => (
                  <li key={index} className="verse-item">
                    <span className="verse-bullet">•</span>
                    {verse}
                  </li>
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