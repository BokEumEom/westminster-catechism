import { useState, useEffect } from 'react';

const useCatechismData = () => {
  const [catechismData, setCatechismData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/catechismData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('데이터를 불러오는 중 오류가 발생했습니다.');
        }
        return response.json();
      })
      .then((data) => {
        setCatechismData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { catechismData, loading, error };
};

export default useCatechismData;
