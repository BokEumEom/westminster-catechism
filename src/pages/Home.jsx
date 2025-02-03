// src/pages/Home.jsx
import { useRef, useState } from 'react';
import CatechismAccordionList from '../components/CatechismAccordionList';
import TableOfContents from '../components/TableOfContents';
import Header from '../components/Header';

const Home = () => {
  const accordionRef = useRef();
  const [showTOC, setShowTOC] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openTOC = () => setShowTOC(true);
  const closeTOC = () => setShowTOC(false);

  const handleSelectTOC = (id) => {
    if (accordionRef.current) {
      accordionRef.current.scrollToItem(id);
    }
  };

  return (
    <div className="container">
      <Header onSearch={setSearchQuery} />
      <button onClick={openTOC} className="toc-button">목차</button>
      <CatechismAccordionList ref={accordionRef} searchQuery={searchQuery} />
      {showTOC && <TableOfContents onClose={closeTOC} onSelect={handleSelectTOC} />}
    </div>
  );
};

export default Home;
