import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
function Resume() {
  return (
    <Container id="resume">
      <h2 className="text-center">Resume</h2>
      <section className="container text-center">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSIQLaQWsHX_pzbdc2fmmK88wWn5doywyuN_-g6rDn9fcw763EmtrQeLIzeiCQ07FFZdWoDv3ye3hWx/pub?embedded=true"
          width="640"
          height="700"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="resume"
        ></iframe>
        <div className="d-grid gap-2">
          <a href={process.env.PUBLIC_URL + "/Resume.pdf"} download>
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
