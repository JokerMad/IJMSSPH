import React , {useState} from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ClientDash from './ClientDash';
import './Clientdash.css'
import { useLocation } from 'react-router-dom';
import fetchApi from "../../api-services/apiIndex";
import moment from 'moment';

const ArticleDetails = () => {
   

  const location=useLocation()

  let data=location.state.row
  console.log(data)
  const id = data.id;

 

  // const fetchArticleDetails = async () => {
  //   const details = await fetchApi.get("DOWNLOADUSERARTICLE", { id });
  //  console.log(details)

  // //  href={`${process.env.REACT_APP_BASE_URL}downloadUserarticle?id=${data.id}`}

  // };

 



 
  const formattedDate = moment(Number(data.submittedDate)).format('YYYY-MM-DD HH:mm:ss');
  return (
   <ClientDash>
     <Container >
      <Row className='jab_articledetails'>
        <h1 className='mb-3 jab_commmon_color'>Article Details</h1>
        {/* Left Column */}
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <h6 className="text-muted fw-bold">TITLE</h6>
              <p className="mb-0">{data.title}</p>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <h6 className="text-muted fw-bold">ABSTRACT</h6>
              <p className="mb-0">{data.abstract}</p>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <h6 className="fw-bold text-muted">KEYWORDS</h6>
              <p className="mb-0">{data.message}</p>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <h6 className="fw-bold text-muted">SUBMITTED ON</h6>
              <p className="mb-0">{formattedDate}</p>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <h6 className="fw-bold text-muted">SUBMITTED ARTICLE FILE</h6>
              <Button variant="primary mb-0"   href={`${process.env.REACT_APP_BASE_URL}downloadUserarticle?id=${data.id}`}>Download Your Article</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column */}
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body style={{ backgroundColor: '#e3f2fd' }}>
              <h5 className="text-primary fw-bold mb-0">{data.status.toUpperCase()}</h5>
              <p className="text-muted  mb-0">STATUS</p>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body style={{ backgroundColor: '#fff8e1' }}>
              <h5 className="text-warning  mb-0">{data.paymentStatus?'Paid':"PENDING"}</h5>
              <p className="text-muted mb-0">PAYMENT STATUS</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
   </ClientDash>
  );
};

export default ArticleDetails;
