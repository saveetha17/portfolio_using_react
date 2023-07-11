import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
function Resume() {
  return (
    <Container id="resume">
      <h2 className="text-center">Resume</h2>
      <section className="container text-center">
        <iframe
          src="https://docs.google.com/document/d/0B1UyS2VTl743QzY4dFV6Y0pyUGVHclNNVkUyenRJQWpmMzZR/edit?usp=drive_link&ouid=118433053718451611351&resourcekey=0-V9N9DTZlRybDzNQ_4r-0sw&rtpof=true&sd=true"
          width="640"
          height="700"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="resume"
        ></iframe>
        <div className="d-grid gap-2">
          <a href={process.env.PUBLIC_URL + "/assets/Resume.pdf"} download>
            <Button variant="primary" size="lg">
              Download Resume
            </Button>
          </a>
        </div>
      </section>
    </Container>
  );
}

export default Resume;
