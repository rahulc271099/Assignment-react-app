import React, { useEffect, useState } from "react";
import { useLoaderData,useParams,useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'

function User() {
  const [loading, setLoading] = useState(true);
  const [inputId,setInputId] = useState('1')

  const user = useLoaderData();
  const navigate = useNavigate()  
  const {id} = useParams()

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <h2>Loading!</h2>;
  }

  const handleSearch = () => {
    if (inputId.trim() !== "") {
    //   setLoading(true); // Show loading when fetching new data
      navigate(`/user/${inputId}`);
      setInputId('')
    }
  };

  return (
    <div>
      <h1>User</h1>
      <Container>
        <Row className="d-flex">
          <div className="d-flex justify-content-end align-items-center">
            <Form.Label htmlFor="id" className="fw-bold">Enter the ID:</Form.Label>
            <Form.Control
              type="number"
              id="id"
              className="w-25 mx-4"
              value={inputId}
              onChange={e=>setInputId(e.target.value)}
            />
            <Button variant="primary" className="mx-4 searchBtn" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </Row>
      </Container>
      <Container className="mainContainer mt-4">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p>ID: {id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default User;

export const userDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error("User not found");
  }
  const user = await response.json();
  console.log(user);

  return user;
};
