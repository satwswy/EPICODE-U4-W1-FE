import React from "react";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
import { Card, Spinner } from 'react-bootstrap'



const BlogItem = (props) => {
  
  const { title, cover, author, _id } = props;
  return (
    <>
      
    <Link to={`/blog/${_id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor {...author} />
        </Card.Footer>
      </Card>
    </Link>
    </>
  );
};

export default BlogItem;
