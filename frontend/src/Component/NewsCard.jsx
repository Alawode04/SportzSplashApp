// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// const NewsCard = ({ news }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpansion = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={news.image} />
//       <Card.Body>
//         <Card.Title>{news.headline}</Card.Title>
//         {expanded ? (
//           <Card.Text>{news.fullContent}</Card.Text>
//         ) : (
//           <Card.Text>{news.shortContent}</Card.Text>
//         )}
//         <Button variant="primary" onClick={toggleExpansion}>
//           {expanded ? 'Read Less' : 'Read More'}
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default NewsCard;
