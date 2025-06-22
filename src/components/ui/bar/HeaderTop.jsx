import { Link } from "react-router-dom";

const headerList = [
  {
    icon: "flaticon-maps-and-flags",
    name: "Pune, Maharashtra, India",
  },
  {
    icon: "flaticon-gmail-logo",
    name: "contact@sparkempowers.com",
    url: "mailto:contact@sparkempowers.com",
  },
  {
    icon: "flaticon-call",
    name: "+91 (960) 473 5196",
    url: "tel:+919604735196",
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
              {headerList}
              {headerList?.map((item, i) => (
                <li key={i}>
                  <div className="icon-box">
                    <i className={item.icon} />
                  </div>
                  {item.url ? (
                    <p>
                      <Link href={item.url}>{item.name}</Link>
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
                  <Link href="/">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
