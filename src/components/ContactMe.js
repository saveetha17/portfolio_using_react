import Container from "react-bootstrap/Container";
function ContactMe() {
  return (
    <Container id="contactme">
      <h2 className="text-center">Contact Me</h2>
      <section className="container text-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScgHfos-W0dzH4X5VnmggW7agOobq4xyE9vsI-QkKv-Rw2B7g/viewform?embedded=true"
          width="640"
          height="700"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="contactme"
        >
          Loading…
        </iframe>
      </section>
    </Container>
  );
}

export default ContactMe;
