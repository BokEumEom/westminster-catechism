import React, { useRef } from 'react';
import CatechismAccordionItem from './CatechismAccordionItem';
import useCatechismData from '../hooks/useCatechismData';

const CatechismAccordionList = React.forwardRef((props, ref) => {
  const { catechismData, loading, error } = useCatechismData();
  const itemRefs = useRef([]);

  const scrollToItem = (id) => {
    const index = catechismData.findIndex((item) => item.id === id);
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useImperativeHandle(ref, () => ({
    scrollToItem,
  }));

  if (loading) return <p>데이터 로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

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

// ✅ `displayName` 추가 (ESLint 경고 해결)
CatechismAccordionList.displayName = 'CatechismAccordionList';

export default CatechismAccordionList;
