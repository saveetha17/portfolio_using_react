import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";

function AboutMe() {
  return (
    <Container id="aboutme">
      <Row>
        <Col xs={6} md={4}>
          <Image
            src={process.env.PUBLIC_URL + "/assets/images/AvatarImage.jpg"}
            roundedCircle fluid
          />
        </Col>
        <Col>
          <h2>Welcome to Portfolio!</h2>
          <p>Feel free to check my work</p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Professional Experience</Accordion.Header>
              <Accordion.Body>
                <p>Learning MERN stack</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Educational Assets</Accordion.Header>
              <Accordion.Body>
                <p>Full Stack Flex Development Program</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Hobby</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Hiking</li>
                  <li>Cycling</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Fun fact about me</Accordion.Header>
              <Accordion.Body>
                <p>Love Nature</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
