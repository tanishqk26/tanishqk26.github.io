// Same Contact section — exact same layout as original
// Email, phone, then social icons (Font Awesome via CDN in index.html)

export default function Contact() {
  return (
    <section id="contact" className="Contact fade-in">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>If you'd like to reach out, feel free to contact me through any of the platforms below:</p>

        <ul>
          <li>Email: tanishqkokane@gmail.com</li>
          <li>Phone: +91 7385990561</li>
        </ul>

        {/* Social icons — same Font Awesome classes as original */}
        <div className="social">
          <ul>
            <li>
              <a
                href="https://x.com/tanishqk26"
                className="fa fa-twitter"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              />
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tanishq-kokane-7611801b4/"
                className="fa fa-linkedin"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              />
            </li>
            <li>
              <a
                href="https://github.com/tanishqk26"
                className="fa fa-github"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
