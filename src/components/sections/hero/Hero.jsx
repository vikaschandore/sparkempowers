import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const peoples = [
  "/images/team/team-info1.png",
  "/images/team/team-info2.png",
  "/images/team/team-info3.png",
  "/images/team/team-info4.png",
  "/images/team/team-info5.png",
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Video Modal Handler
  const videoOpenHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="hero-sec bg-green hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="hero-tagline text-teal">
                  Smart IT Solutions & Scalable Web Development
                </span>
                <h1 className="hero-title text-white">
                  Let’s build the <br/>future together
                </h1>
                <p className="text-white">
                  We build powerful, secure, and user-centric digital <br/>experiences—designed to grow with your business.
                </p>
                <div className="hero-btn-area d-flex align-items-center">
                  <Link to="/about" className="thm-btn">
                    <span className="txt">Read More</span>
                  </Link>
                  <a to="#" onClick={videoOpenHandler} className="play-btn">
                    <i className="fas fa-play" />
                  </a>
                  <span className="play-intro">Play Intro</span>
                </div>
                <div className="hero-team-info d-flex align-items-center">
                  <div className="team-members d-flex">
                    {peoples?.map((item, i) => (
                      <div key={i} className="team-members-img">
                        <img src={item} alt="profile" />
                      </div>
                    ))}
                  </div>
                  <div className="total-team-count">
                    <span>8+</span>
                    <p>Team Members</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-images hero-style1">
                <div className="hero-feature-img feature-one br-style1">
                  <img
                    className="br-style1 h-100"
                    src="/images/hero/Banner-Image-by-Spark-Empowers-Technologies.jpg"
                    alt="Banner Image by Spark Empowers Technologies"
                  />
                </div>
                <div className="hero-info-img feature-two">
                  <img src="/images/hero/hero-info-img1.png" alt="hero-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* youtube modal part start */}
      <ModalVideo
        channel="youtube"
        isOpen={isModalOpen}
        videoId="GGf1JjSAKP4"
        onClose={() => setIsModalOpen(false)}
        youtube={{
          autoplay: 1,
          mute: 1,
        }}
      />
      {/* youtube modal part end */}
    </>
  );
}
