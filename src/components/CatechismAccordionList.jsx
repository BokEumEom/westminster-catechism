// src/components/CatechismAccordionList.jsx
import React, { useRef } from 'react';
import { catechismData } from '../data/catechismData';
import CatechismAccordionItem from './CatechismAccordionItem';

const CatechismAccordionList = React.forwardRef((props, ref) => {
  const itemRefs = useRef([]);

  // scrollToItem 함수를 통해 부모에서 특정 문항으로 스크롤할 수 있음
  const scrollToItem = (id) => {
    const index = catechismData.findIndex(item => item.id === id);
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useImperativeHandle(ref, () => ({
    scrollToItem,
  }));

  return (
    <div className="accordion-list">
      {catechismData.map((item, index) => (
        <CatechismAccordionItem
          key={item.id}
          item={item}
          idRef={(el) => (itemRefs.current[index] = el)}
        />
      ))}
    </div>
  );
});

CatechismAccordionList.displayName = 'CatechismAccordionList';

export default CatechismAccordionList;
