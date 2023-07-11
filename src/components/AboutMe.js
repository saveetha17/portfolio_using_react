import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";

function AboutMe() {
  return (
    <Container id="aboutme" className="page-content">
      <Row>
        <Col xs={6} md={4}>
          <Image
            src={
              process.env.PUBLIC_URL + "/assets/Images/AvatarProfileImage.png"
            }
            roundedCircle
            fluid
          />
        </Col>
        <Col>
          <h2>Thank you for visiting my portfolio!</h2>
          <p>I would appreciate it if you could take a look at my work.</p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Professional Experience</Accordion.Header>
              <Accordion.Body>
                <p>
                  As a frontend developer, I was responsible for creating
                  visually appealing and user-friendly websites. I utilized
                  HTML, CSS, and JavaScript to build responsive interfaces that
                  provided an optimal user experience. Additionally, I
                  implemented modern front-end frameworks like React to develop
                  dynamic and interactive web applications. Collaborating
                  closely with designers and other team members, I ensured
                  seamless integration of design and functionality. I took part
                  in rigorous testing and debugging to deliver high-quality,
                  bug-free code. Throughout my work, I stayed updated with
                  industry trends and best practices to continuously enhance my
                  skills and contribute to successful projects.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Educational Assets</Accordion.Header>
              <Accordion.Body>
                <p>
                  I have a Bachelor's degree in Electrical and Electronics
                  Engineering and I completed a Full Stack Flex Development
                  Bootcamp, which greatly enhanced my skills and knowledge in
                  web development. This intensive program, offered by University
                  of Toronto, equipped me with a comprehensive understanding of
                  full stack development. Throughout the bootcamp, I gained
                  hands-on experience in front-end and back-end technologies,
                  including HTML, CSS, JavaScript, React, Node.js, and
                  databases. I worked on various projects that allowed me to
                  apply these skills and develop practical expertise in building
                  dynamic and responsive web applications. The bootcamp not only
                  strengthened my technical abilities but also provided valuable
                  insights into industry best practices and the collaborative
                  nature of software development. The knowledge and experience
                  gained from the Full Stack Flex Development Bootcamp have been
                  instrumental in my growth as a developer, enabling me to
                  tackle complex challenges and deliver high-quality solutions
                  in the ever-evolving field of web development.
                </p>
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
                <p>
                  One of my favorite experiences is waking up early to watch the
                  sunrise. There's something magical about witnessing the world
                  slowly awaken, as the colors of the sky change and the sun
                  gracefully rises above the horizon. It's a peaceful and
                  inspiring way to start the day.I have a deep appreciation for
                  nature and love exploring the outdoors. Whenever I have the
                  opportunity, I enjoy hiking in serene forests and capturing
                  the beauty of landscapes through photography.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
