import React from 'react';
import { Button,  Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPaperPlane } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const Sidebar = ({isOpen , toggleSidebar}) => {


  return (

    <div    className='jab_commmon_bgcolor'
      style={{
        width: isOpen ? '250px' : '70px',
        height: '100vh',
       
        color: '#fff',
        // transition: 'width 0.3s',
        overflow: 'hidden',
        position: 'fixed',
       
      }}
    >
      <Button
        variant="secondary"
        size="sm"
        className='mt-3'
        onClick={toggleSidebar}
        style={{
            margin: isOpen ? '10px' : 'auto',
          position: 'absolute',
          left: isOpen ? '180px' : '15px',
          zIndex: 1,
          transition: 'left 0.3s',
          alignSelf: isOpen ? 'flex-end' : 'center',
        }}
      >
         <GiHamburgerMenu size={24}    />
      </Button>
      <Nav className="flex-column  pt-5 mt-5" >
        <Nav.Item className={`${isOpen ? 'px-3' : ''}`}>
          <Nav.Link href="/author/articles" className="d-flex align-items-center text-white">
           
            {isOpen && <span  style={{fontSize:"22px"}}>Your Article</span>}
            <FaFileAlt  className="ms-2"  size={20}/>

          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`${isOpen ? 'px-3' : ''}`}>
          <Nav.Link href="/author/article-submission" className="d-flex align-items-center text-white">
           
            {isOpen && <span style={{fontSize:"22px"}} >Submit</span>}
            <FaPaperPlane className="ms-2"  size={20}/>
          </Nav.Link>
        </Nav.Item>
    
      </Nav>
    
      
      
    </div>


  );
};

export default Sidebar;
