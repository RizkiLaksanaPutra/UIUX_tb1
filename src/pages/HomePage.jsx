import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, testimonial } from "../data";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";
import Part from "../components/Part";
import { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  const kelas = useRef(null);

  const handleScrollKelas = () => {
    if (kelas.current) {
      kelas.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage position-relative">
      <header
        className="w-100 min-vh-100 d-flex align-items-center"
        id="particles-js">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5 ">
            <Col lg="6" className="">
              <h1 className="mb-4 animate__animated animate__fadeInLeft">
                Temukan <br /> <span>Bakat Kreatifitas</span> Bersama Kami!
              </h1>
              <p className="mb-4">
                Bangun karirmu sebagai developer profesional dengan mulai
                belajar sesuai standar industri global
              </p>
              <button
                className="btn btn-danger btn-lg me-3 mb-xs-0  rounded animate__animated animate__fadeInUp animate__delay-1s 1s"
                onClick={handleScrollKelas}>
                Lihat kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 animate__animated animate__fadeInLeft animate__delay-1s 1s">
                Lihat promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt=""
                className="animate__animated animate__fadeInRight"
              />
            </Col>
          </Row>
          <div className="part">
            <Part />
          </div>
        </Container>
      </header>
      <div
        className="kelas w-100 min-vh-100"
        name="kelas"
        ref={kelas}
        id="kelas">
        <Container data-aos="fade-right">
          <Row>
            <Col className="animate__animated animate__fadeInLeft">
              <h1 className="text-center fw-bold animate__animated animate__fadeInLeft">
                Kelas terbaru
              </h1>
              <p className="text-center">
                Mulai perjalanan pembelajaran Anda hari ini dengan memilih salah
                satu dari kelas-kelas berkualitas kami
              </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} data-aos="fade-up">
                  <img src={kelas.image} className="w-100 mb-4 rounded-top" />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn all-kelas rounded-4 btn-lg shadow-sm"
                onClick={() => navigate("/kelas")}>
                Lihat Semua kelas
              </button>
              <i className="fa-solid fa-chevron-right ms-3"></i>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial">
        <Container data-aos="fade-left">
          <Row>
            <Col>
              <h1 className="text-center fw-bold pb-4">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper">
              {testimonial.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* SECTION FAQ */}
      <FaqComponent />
      {/* SECTION FAQ */}
    </div>
  );
};

export default HomePage;
