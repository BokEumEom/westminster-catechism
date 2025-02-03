// src/components/CatechismItem.jsx
import { Link } from 'react-router-dom';

const CatechismItem = ({ item }) => {
  return (
    <div className="catechism-item">
      <h2>문{item.id}. {item.question}</h2>
      <p>
        <strong>답.</strong> {item.answer}
      </p>
      <Link to={`/detail/${item.id}`}>자세히 보기</Link>
    </div>
  );
};

export default CatechismItem;
