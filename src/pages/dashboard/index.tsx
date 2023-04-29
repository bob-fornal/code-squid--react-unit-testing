
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import Header from '@shared/header';

import * as api from '@core/api';

import style from '@styles/Dashboard.module.css';

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
      <div className={style.dashboardWrapper}>
        <div className={style.filter}>
          <Card className={style.filterCard} variant="outlined">
            <CardHeader title="Filter" />
            <CardContent>FILTER</CardContent>
          </Card>
        </div>
        <div className={style.content}>
          CONTENT
        </div>
      </div>
    </>
  );
}
