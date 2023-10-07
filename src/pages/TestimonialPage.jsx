import { Row, Col, Container } from "react-bootstrap";
import { testimonial } from "../data";

export const TestimonialPage = () => {
  return (
    <div className="testimonial-page animate__animated animate__fadeInUp">
      <div className="testimonial min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Testimonial</h1>
              <p className="text-center">
                apa kata mereka yang sudah belajar bersama kelas kami?
              </p>
            </Col>
          </Row>
          <Row className="row-cols-2 justify-content-center">
            {testimonial.map((data) => {
              return (
                <Col
                  key={data.id}
                  className="shadow-sm mb-5 py-4 px-4 card col-4 justify-content-between"
                  data-aos="fade-up">
                  <p className="desc">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};
