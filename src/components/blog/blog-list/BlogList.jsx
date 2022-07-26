import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState , useEffect} from "react";
import { Card, Spinner } from 'react-bootstrap'

const BlogList = (props) => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetchProducts();
  },[])
  const fetchProducts = async () =>{
try {
  const apiUrl = process.env.REACT_APP_BE_URL
  const getProducts = await fetch(`${apiUrl}/medias`)
  const res = await getProducts.json()
  console.log(res)
  setProducts(res)
} catch (error) {
  console.log(error)
}
  }
  return (
    // {products ?  products.map(current => {
    //   return      <Card>
          
    //   <Card.Body className="text-dark">
    //     <Card.Title>{current.name}</Card.Title>
    //     <Card.Text>
    //       {current.name} - {current.name}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    //  })
        
    //    : (
    //     <Spinner variant="warning" animation="border" />
   
    //   )}
    <Row>
      <>
      {products ?  products.map(current => {
       return      <Card>
          
       <Card.Body className="text-dark">
         <Card.Title>{current.title}</Card.Title>
         <Card.Text>
           {current.year} - {current.type}
         </Card.Text>
       </Card.Body>
     </Card>
      })
        
        : (
         <Spinner variant="warning" animation="border" />
   
       )}
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} product={products}/>
        </Col>
      ))}
      </>
    </Row>
    
  );
};

export default BlogList;
