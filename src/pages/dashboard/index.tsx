
import { useState, useEffect } from 'react';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from '@styles/Dashboard.module.css';

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image className={styles.logo} src="/images/code-squid.png" height={48} width={129} alt="code-squid logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
