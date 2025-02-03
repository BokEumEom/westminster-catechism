// src/pages/Home.jsx
import { useRef, useState } from 'react';
import CatechismAccordionList from '../components/CatechismAccordionList';
import TableOfContents from '../components/TableOfContents';

const Home = () => {
  const accordionRef = useRef();
  const [showTOC, setShowTOC] = useState(false);

  const openTOC = () => setShowTOC(true);
  const closeTOC = () => setShowTOC(false);

  const handleSelectTOC = (id) => {
    if (accordionRef.current) {
      accordionRef.current.scrollToItem(id);
    }
  };

  return (
    <div className="container">
      {/* 목차 버튼에 'toc-button' 클래스를 추가 */}
      <button className="toc-button" onClick={openTOC}>목차</button>
      <CatechismAccordionList ref={accordionRef} />
      {showTOC && (
        <TableOfContents onClose={closeTOC} onSelect={handleSelectTOC} />
      )}
    </div>
  );
};

export default Home;
