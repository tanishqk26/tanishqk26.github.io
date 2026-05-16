// Same structure as original: left content (h1 + p), right profile image
// Section uses id="home" class="Home" — identical to original
export default function Hero() {
  return (
    <section id="home" className="Home">
      <div className="hero-content">
        <h1>Tanishq Deepak Kokane</h1>
        <p>"AI is My Canvas, Code is My Brush."</p>
      </div>

      <div className="hero-image">
        <img src="/Main.jpg" alt="Tanishq Kokane" width="400" />
      </div>
    </section>
  )
}
