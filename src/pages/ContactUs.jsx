function ContactUs() {
  return (
    <section className="contact">
      <div className="contact-input">
        <input type="text" placeholder="Your Name*" required />
        <input type="email" placeholder="Your Email*" required />
        <button type="submit">Send Message</button>
      </div>
      <div className="contact-textarea">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message*"
        ></textarea>
      </div>
    </section>
  );
}

export default ContactUs;
