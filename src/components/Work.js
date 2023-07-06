import projects from "./projects.json";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

function Work() {
  const [projectList] = useState(projects);

  return (
    <Container>
      <section className="d-flex flex-wrap justify-content-evenly">
        {projectList.map((project, key) => {
          return (
            <Card key={key} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + project.image}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              {/* <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> */}
              <Card.Body>
                <Card.Link href={project.live}>Live Link</Card.Link>
                <Card.Link href={project.repo}>Repo Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </section>
    </Container>
  );
}

export default Work;
