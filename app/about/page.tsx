export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>About DDM Technology</h1>
          <p>Your trusted partner for comprehensive IT solutions</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <p className="section-subtitle">
            Leading provider of IT solutions and software development in South Africa
          </p>

          <div className="about-content">
            <div className="about-text">
              <h3>Professional IT Services</h3>
              <p>
                DDM Technology is a leading provider of comprehensive IT solutions based in South
                Africa. We specialize in delivering high-quality technical support, software
                development, and digital solutions for businesses and individuals.
              </p>
              <p>
                From on-site support to cutting-edge app development, we handle all your technology
                needs with professionalism and expertise. Our mission is to empower our clients
                through technology, making their digital dreams a reality.
              </p>

              <h3 style={{ marginTop: '2rem' }}>Our Mission</h3>
              <p>
                At DDM Technology, we believe in the power of technology to transform businesses and
                lives. Our mission is simple: <strong>Dream. Dare. Make.</strong> - We dare to make
                your dreams come true through innovative technology solutions.
              </p>

              <h3 style={{ marginTop: '2rem' }}>Why Choose Us?</h3>
              <ul className="features-list">
                <li>Expert team with years of industry experience</li>
                <li>Comprehensive range of IT services under one roof</li>
                <li>24/7 customer support and assistance</li>
                <li>Competitive pricing with no hidden costs</li>
                <li>Proven track record of successful projects</li>
                <li>Latest technology and best practices</li>
              </ul>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
