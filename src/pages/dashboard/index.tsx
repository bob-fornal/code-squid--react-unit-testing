
import { useState, useEffect } from 'react';
import * as api from '@core/api';

export default function Dashboard() {
  const [data, setData] = useState({ name: '' });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getData()
      .then((data) => {
        setData(data);
        setLoading(false)
      })
      .catch(console.log);
  }, []);

  if (isLoading === true) return <p>Loading ...</p>;

  return (
    <>
      <div className='dashboard-wrapper'>Dashboard</div>
      <div className='data'>Name: {data.name}</div>
    </>
  );
}
