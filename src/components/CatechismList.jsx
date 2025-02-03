// src/components/CatechismList.jsx
import { catechismData } from '../data/catechismData';
import CatechismItem from './CatechismItem';

const CatechismList = () => {
  return (
    <div className="catechism-list">
      {catechismData.map(item => (
        <CatechismItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CatechismList;
