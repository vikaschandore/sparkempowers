import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-images">
              <div
                className="sec-img-one overflow-hidden wow fadeInLeft"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/images/about/about01.png"
                  alt="about-img"
                  className="h-100"
                />
              </div>
              <div
                className="sec-img-two overflow-hidden wow fadeInRight"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/images/about/about02.png"
                  alt="about-img"
                  className="h-100"
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 tab-col-gap wow fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <h6 className="sec-sub-title">About Us</h6>
              <h2 className="sec-title">
                Turning Ideas into Scalable Digital Solutions
              </h2>
              <p className="sec-text">
                We specialize in building custom IT and web development solutions that streamline 
                operations, solve complex business challenges, and unlock new growth opportunities. 
                From concept to execution, we partner with you at every stage of the digital journey.
              </p>
              <ul className="sec-list-item">
                <li>
                  <i className="fa-solid fa-square-check" />
                  Custom Website Design & Development
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  E-Commerce Development
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Artificial Intelligence and Automation
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Web Applications & Portals
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  API & Third-Party Integrations
                </li>
              </ul>
              <div className="sec-btn">
                <Link to="/about" className="thm-btn">
                  <span className="txt">Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
