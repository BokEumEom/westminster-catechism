// src/components/CatechismAccordionList.jsx
import React, { useRef, useState, useEffect } from 'react';
import CatechismAccordionItem from './CatechismAccordionItem';
import useCatechismData from '../hooks/useCatechismData';
import '../styles/CatechismAccordionList.css';

const CatechismAccordionList = React.forwardRef(({ searchQuery }, ref) => {
  const { catechismData, loading, error } = useCatechismData();
  const itemRefs = useRef([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  }, [searchQuery]);

  const filteredData = catechismData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // 목차에서 선택한 항목으로 이동
  const scrollToItem = (id) => {
    const itemIndex = filteredData.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const page = Math.ceil((itemIndex + 1) / itemsPerPage);
      setCurrentPage(page);

      setTimeout(() => {
        const adjustedIndex = itemIndex % itemsPerPage;
        if (itemRefs.current[adjustedIndex]) {
          itemRefs.current[adjustedIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  React.useImperativeHandle(ref, () => ({
    scrollToItem,
  }));

  if (loading) return <p>데이터 로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;
  if (filteredData.length === 0) return <p>검색 결과가 없습니다.</p>;

  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="accordion-container">
      <div className="accordion-list">
        {currentItems.map((item, index) => (
          <CatechismAccordionItem
            key={item.id}
            item={item}
            idRef={(el) => (itemRefs.current[index] = el)}
          />
        ))}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            이전
          </button>
          <span className="page-info">
            {currentPage} / {totalPages}
          </span>
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
});

// ✅ `displayName` 추가 (ESLint 경고 해결)
CatechismAccordionList.displayName = 'CatechismAccordionList';

export default CatechismAccordionList;
