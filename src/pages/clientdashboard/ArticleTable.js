import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ClientDash from './ClientDash';
import { Link, useNavigate } from 'react-router-dom';
import './Clientdash.css';
import clientDashboardServices from '../../services/clientDashboardServices';
import { getCookie } from '../../function';
import { jwtDecode } from 'jwt-decode';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Loader from '../../common_comp/loader';
const moment = require('moment');


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ArticleTable = () => {
  const [token, setToken] = useState(getCookie('token'));
    const [loading, setLoading] = useState(true);
  const decodedToken = token ? jwtDecode(token) : null;
  const [articleList, setArticleList] = useState([])
  const data = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
    { id: 3, name: 'Sam Green', age: 45, email: 'sam@example.com' },

  ];

  const navigate = useNavigate();


  const getAllArticleByAuthorId = async () => {
    let paramData = {
      userId: decodedToken.user.id
    }
    // API call to get all articles by author id
    try {
      const response = await clientDashboardServices.getAllArticle(paramData);
      if (response.status == 200) {
        setArticleList(response.data.articles)
        setLoading(false);
      }
      console.log(response)
    } catch (error) {
      setArticleList([])
      console.error('Error during login:', error);
      setLoading(false);
      // Handle error (e.g., show a message to the user)
    }
  };
  useEffect(() => {
    getAllArticleByAuthorId()
  }, [])
  const handleViewArticleDetails=(row)=>{
    navigate(`/author/articles/${row.id}`,{state:{row}})
  }

  if (loading) {
    return <Loader/>;
  }

  return (
    <ClientDash>
      <Container className="px-lg-3 px-1">
        <h1 className="mb-3 jab_commmon_color">Article</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Submitted On</TableCell>
                <TableCell align="center">Payment Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*  */}
              {articleList.map((row) => {
                const formattedDate = moment(Number(row.submittedDate)).format('YYYY-MM-DD HH:mm:ss');
                return (
                  // <Link to={`/author/articles/${row.id}`}>
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      onClick={()=>handleViewArticleDetails(row)}
                      className='jab_client_articletable'

                    >
                      <TableCell component="th" scope="row">
                        {row.id.split('-')[0]}
                      </TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">{formattedDate}</TableCell>
                      <TableCell align="center">{row.paymentStatus?'Paid':"Pending"}</TableCell>
                    </TableRow>
                 
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ClientDash>
  );
};

export default ArticleTable;
