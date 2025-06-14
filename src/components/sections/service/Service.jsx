import { Link } from "react-router-dom";
import { services } from "../../../data/site";

export default function Service() {
  return (
    <section className="service-sec bg-light-greem sec-ptb our-latest-services">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <h6 className="sec-sub-title">Our Latest Services</h6>
              <h2 className="sec-title">
                From Idea to Impact
              </h2>
              <p className="sec-text">
                We design, develop, and deliver tailored software solutions that align with your 
                business goals and meet real market demand. Whether you're launching a new product 
                or improving an existing one, our expert team handles everything from architecture 
                to testing—with scalability, performance, and user experience in mind. 
                With our strategic support, you’ll:
              </p>
              <div>
                <ul>
                  <li>Reach the right customers</li>
                  <li>Generate consistent revenue</li>
                  <li>Attract meaningful investment</li>
                </ul>
              </div>
              <div className="sec-btn">
                <Link to="/services" className="thm-btn">
                  <span className="txt">View All Services</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div className="service-lists service-lists-style1">
              {services?.map((item, i) => (
                <div
                  key={i}
                  className="single-service d-flex align-items-center wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  {/* single-service 1*/}
                  <div className="single-service-icon">
                    <i className={item.icon} />
                  </div>
                  <div className="single-service-content">
                    <h4>{item.title}</h4>
                    <p>{item.brief}</p>
                    <Link to={item.url}>
                      <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
