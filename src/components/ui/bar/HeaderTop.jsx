import { Link } from "react-router-dom";

const headerList = [
  {
    icon: "flaticon-maps-and-flags",
    name: "Pune, Maharashtra, India",
  },
  {
    icon: "flaticon-gmail-logo",
    name: "contact@sparkempowers.com",
    url: "contact@sparkempowers.com",
  },
  {
    icon: "flaticon-call",
    name: "+91 (960) 473 5196",
    url: "+919604735196",
  },
];

export default function HeaderTop() {
  return (
    <div className="main-header-one__top">
      <div className="main-header-one__top-pattern" />
      <div className="main-header-one__top-inner">
        <div className="main-header-one__top-left">
          <div className="header-contact-info">
            <ul>
              {headerList?.map((item, i) => (
                <li key={i}>
                  <div className="icon-box">
                    <i className={item.icon} />
                  </div>
                  {item.url ? (
                    <p>
                      <a
                        href={
                          item.url.includes("@")
                            ? `mailto:${item.url}`
                            : item.url.startsWith("+")
                            ? `tel:${item.url}`
                            : item.url
                        }
                      >
                        {item.name}
                      </a>
                    </p>
                  ) : (
                    <p>{item.name}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="main-header-one__top-right">
          <div className="inner">
            <div className="header-social-links">
              <ul>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
