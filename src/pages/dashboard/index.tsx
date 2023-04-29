
import { useState, useEffect } from 'react';

import Header from '@shared/header';

import * as api from '@core/api';

export default function Dashboard() {
  const [data, setData] = useState({ name: '' });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  if (isLoading === true) return <p>Loading ...</p>;

  return (
    <>
      <Header />
      <div>Name: {data.name}</div>
    </>
  );
}
