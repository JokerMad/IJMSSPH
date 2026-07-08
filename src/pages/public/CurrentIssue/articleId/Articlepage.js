import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router for routing
import Articleid from '../../Archives/Articleid/Articleid'; // Adjust the path as needed

function ArticlePage() {
  const { article } = useParams(); 

  return (
    <div >
      <Articleid params={{ article }} />
    </div>
  );
}

export default ArticlePage;
