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
      <header>
        <h1>웨스트민스터 소요리 문답</h1>
        <button onClick={openTOC}>목차</button>
      </header>
      <CatechismAccordionList ref={accordionRef} />
      {showTOC && <TableOfContents onClose={closeTOC} onSelect={handleSelectTOC} />}
    </div>
  );
};

export default Home;
