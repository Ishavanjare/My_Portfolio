function Contact() {
  return (
    <section className="contact">
      <h1 className="aname">Contact</h1>
      <p className="atagline"><i className="fas fa-envelope"></i> : 
        <a href="mailto:ishavanjare210@gmail.com" style={{textDecoration:'none'}} className="contact-link"> ishavanjare210@gmail.com</a>
      </p>

      <p className="atagline"><i className="fab fa-linkedin"></i> : 
        <a href="https://www.linkedin.com/in/ishavanjare/" style={{textDecoration:'none'}} className="contact-link" target="_blank" rel="noopener noreferrer">  linkedin.com/in/ishavanjare
        </a>
      </p>

      <p className="atagline"><i className="fab fa-github"></i> : 
        <a href="https://github.com/Ishavanjare" style={{textDecoration:'none'}} className="contact-link" target="_blank" rel="noopener noreferrer">  github.com/Ishavanjare
        </a>
      </p>

    </section>
  );
}

export default Contact;
