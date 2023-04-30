
import { useState, useEffect } from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Header from '@shared/header';

import { api } from '@core/api';

import style from '@styles/Dashboard.module.css';

type RowProps = { row: any };

function Row({ row }: RowProps): any {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            data-testid="toggle-button"
            size="small"
            onClick={() => setOpen(!open)}
          >
            { open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.eventType}
        </TableCell>
        <TableCell>
          {row.assignedTo}
        </TableCell>
        <TableCell>
          {row.statusType}
        </TableCell>
        <TableCell>
          {row.dateCreated}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div className='title'>Tasks</div>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell component="th" scope="row">Task Type</TableCell>
                    <TableCell component="th" scope="row">Assigned To</TableCell>
                    <TableCell component="th" scope="row">Status</TableCell>
                    <TableCell component="th" scope="row">Date Created</TableCell>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell component="th" scope="row">Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.tasks.map((task: any) => (
                    <TableRow key={task.key}>
                      <TableCell component="th" scope="row">
                        {task.key}
                      </TableCell>
                      <TableCell>{task.assignedTo}</TableCell>
                      <TableCell>{task.statusType}</TableCell>
                      <TableCell>{task.dateCreated}</TableCell>
                      <TableCell />
                      <TableCell>
                        <Link href={`task/${task.key}/${row.eventId}`}>PAGE</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getEventData()
      .then((data: any) => {
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
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row"/>
                  <TableCell component="th" scope="row">Event Type</TableCell>
                  <TableCell component="th" scope="row">Assigned To</TableCell>
                  <TableCell component="th" scope="row">Status</TableCell>
                  <TableCell component="th" scope="row">Date Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row: any) => (
                  <Row key={row.eventId} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
