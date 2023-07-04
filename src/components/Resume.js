import Container from "react-bootstrap/esm/Container";
function Resume() {
  return (
    <Container>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vSIQLaQWsHX_pzbdc2fmmK88wWn5doywyuN_-g6rDn9fcw763EmtrQeLIzeiCQ07FFZdWoDv3ye3hWx/pub?embedded=true"></iframe>
      <div className="d-grid gap-2">
        <a href={process.env.PUBLIC_URL + "/Resume.pdf"} download>
          <Button variant="primary" size="lg">
            Download Resume
          </Button>
        </a>
      </div>
    </Container>
  );
}

export default Resume;
