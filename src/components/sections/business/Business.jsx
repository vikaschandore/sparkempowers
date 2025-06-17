import ProgressBar from "@ramonak/react-progress-bar";

const progress_data = [
  {
    title: "Productivity",
    completed: 85,
  },
  {
    title: "Digital Marketing",
    completed: 80,
  },
  {
    title: "Technology",
    completed: 90,
  },
];

export default function Business() {
  return (
    <section className="business-sec sec-ptb bg-light-greem">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-content h-100 d-flex justify-content-center flex-column">
              <h6 className="sec-sub-title">Business Process Optimization</h6>
              <h2 className="sec-title">
                Streamline. Scale. Succeed.
              </h2>
              <p className="sec-text">
                We help you simplify complex business operations and drive growth with intelligent, 
                automation-ready solutions. Our AI-powered systems improve efficiency, reduce manual 
                effort, and unlock the full value of your existing data—so you can focus on what 
                matters most: growing your business.
              </p>
              {/* progressbar part start */}{" "}
              {progress_data?.map((item, i) => (
                <div key={i} className="ab-progress">
                  <h2 className="progress-title">{item.title}</h2>
                  <ProgressBar
                    className="ui-progressbar"
                    completed={item.completed}
                    animateOnRender={true}
                    height="8px"
                    baseBgColor="#a1cebe"
                    bgColor="var(--thm-teal)"
                    labelClassName="ui-progressbar-label"
                  />
                </div>
              ))}
              {/* progressbar part end */}
            </div>
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div
              className="sec-images wow fadeInRight"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-img-one">
                <img
                  src="/images/about/Business-Process-Optimization.jpg"
                  alt="about-img"
                  className="h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
