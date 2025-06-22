export default function ContactMap() {
  return (
    <section className="contact-map-sec">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col">
            <div className="contact-map-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.9319240616!2d73.78039413778446!3d18.524761300322755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1750263170981!5m2!1sen!2sin"
                width="100%"
                height={650}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
