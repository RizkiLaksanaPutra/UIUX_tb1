import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ngoding</h3>
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eaque animi magnam quo facere repudiandae dolorum
              reiciendis voluptatibus deserunt obcaecati.
            </p>
            <div className="no mb-3 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+6287829292952</p>
              </Link>
            </div>

            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">arenga@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">Faq</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold">Subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0 ">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
