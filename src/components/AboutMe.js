import Accordion from "react-bootstrap/Accordion";

function AboutMe() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Professional Experience</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Educational Assets</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Hobby</Accordion.Header>
        <Accordion.Body>
          <ul></ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Fun fact about me</Accordion.Header>
        <Accordion.Body>
          <p></p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AboutMe;
