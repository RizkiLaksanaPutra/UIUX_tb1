import { Accordion, Container, Row, Col } from "react-bootstrap";

import { faq } from "../data";

const FaqComponent = () => {
  return (
    <div className="faq-page" data-aos="fade-right">
      <div className="faq animate__animated animate__fadeIn">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center fw-bold">
                Pertanyaan yang sering ditanyakan
              </h2>
            </Col>
          </Row>
          <Row className="row-cols-2 g-4 pt-5">
            {faq.map((data) => {
              return (
                <Col key={data.id}>
                  <Accordion className="shadow-sm">
                    <Accordion.Item eventKey={data.eventKey}>
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>{data.desc}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FaqComponent;
