// src/components/CatechismDetail.jsx
import { useParams } from 'react-router-dom';
import { catechismData } from '../data/catechismData';

const CatechismDetail = () => {
  const { id } = useParams();
  const item = catechismData.find(i => i.id === parseInt(id, 10));

  if (!item) return <p>해당 문답을 찾을 수 없습니다.</p>;

  return (
    <div className="catechism-detail">
      <h2>{item.question}</h2>
      <p>{item.answer}</p>
      {item.bibleVerse && (
        <div className="bible-verse">
          <strong>성경 구절:</strong>
          <p>{item.bibleVerse}</p>
        </div>
      )}
    </div>
  );
};

export default CatechismDetail;
