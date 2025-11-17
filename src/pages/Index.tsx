import { useState } from 'react';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const styles = {
    header: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#1a2332',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ff6b35',
      letterSpacing: '2px',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'color 0.3s',
      padding: '0.5rem',
    },
    hero: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(45, 62, 80, 0.9) 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center' as const,
      padding: '2rem',
      marginTop: '60px',
      position: 'relative' as const,
    },
    heroBackground: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      opacity: 0.3,
      zIndex: 0,
    },
    heroContent: {
      maxWidth: '900px',
      color: '#ffffff',
      position: 'relative' as const,
      zIndex: 1,
    },
    imageGallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    galleryImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover' as const,
      borderRadius: '10px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s',
    },
    productImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover' as const,
      borderRadius: '10px 10px 0 0',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      lineHeight: '1.2',
      color: '#ffffff',
    },
    heroHighlight: {
      color: '#ff6b35',
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      marginBottom: '2rem',
      color: '#e0e0e0',
      lineHeight: '1.6',
    },
    button: {
      backgroundColor: '#ff6b35',
      color: '#ffffff',
      padding: '1rem 2.5rem',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
    },
    section: {
      padding: '5rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center' as const,
      marginBottom: '3rem',
      color: '#1a2332',
      position: 'relative' as const,
    },
    sectionTitleUnderline: {
      width: '80px',
      height: '4px',
      backgroundColor: '#ff6b35',
      margin: '0.5rem auto 0',
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    cardIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: '#1a2332',
    },
    cardText: {
      color: '#666666',
      lineHeight: '1.6',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    productCard: {
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      overflow: 'hidden',
      transition: 'transform 0.3s',
      boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
    },
    productContent: {
      padding: '1.5rem',
    },
    productTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#1a2332',
      marginBottom: '1rem',
    },
    productList: {
      listStyle: 'none',
      padding: 0,
    },
    productItem: {
      padding: '0.5rem 0',
      color: '#555555',
      borderBottom: '1px solid #e0e0e0',
    },
    contactSection: {
      backgroundColor: '#1a2332',
      color: '#ffffff',
      padding: '5rem 2rem',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    contactCard: {
      padding: '2rem',
      backgroundColor: 'rgba(255,255,255,0.05)',
      borderRadius: '10px',
      backdropFilter: 'blur(10px)',
    },
    contactTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#ff6b35',
    },
    contactInfo: {
      lineHeight: '2',
      color: '#e0e0e0',
    },
    footer: {
      backgroundColor: '#0f1419',
      color: '#ffffff',
      textAlign: 'center' as const,
      padding: '2rem',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      margin: '3rem 0',
    },
    statCard: {
      textAlign: 'center' as const,
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ff6b35',
      marginBottom: '0.5rem',
    },
    statLabel: {
      fontSize: '1.1rem',
      color: '#666666',
    },
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>DS ENGINEERING</div>
        <nav style={styles.nav}>
          <span
            style={styles.navLink}
            onClick={() => scrollToSection('home')}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b35')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            Home
          </span>
          <span
            style={styles.navLink}
            onClick={() => scrollToSection('about')}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b35')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            About
          </span>
          <span
            style={styles.navLink}
            onClick={() => scrollToSection('services')}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b35')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            Services
          </span>
          <span
            style={styles.navLink}
            onClick={() => scrollToSection('products')}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b35')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            Products
          </span>
          <span
            style={styles.navLink}
            onClick={() => scrollToSection('contact')}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b35')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            Contact
          </span>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <img src="/images/hero-1.jpg" alt="DS Engineering Foundry Equipment" style={styles.heroBackground} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.heroHighlight}>Excellence</span> in Foundry Solutions
          </h1>
          <p style={styles.heroSubtitle}>
            With 40 years of industry expertise, DS Engineering delivers complete turnkey solutions
            for phenolic sand plants, heat treatment furnaces, and advanced foundry equipment.
          </p>
          <button
            style={styles.button}
            onClick={() => scrollToSection('contact')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.4)';
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          About DS Engineering
          <div style={styles.sectionTitleUnderline}></div>
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666666', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
          Guided by the vision and leadership of Shri Purushottam Sharma, who brings over 40 years of foundry experience,
          DS Engineering has established itself as a trusted name in Phenolic Resin Sand Plant solutions. We specialize in
          turnkey design, manufacturing, and installation of advanced sand plant machinery catering to steel, heavy engineering,
          and iron & ferrous foundries.
        </p>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>40+</div>
            <div style={styles.statLabel}>Years Experience</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>500+</div>
            <div style={styles.statLabel}>Projects Completed</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>Client Satisfaction</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Support Available</div>
          </div>
        </div>

        <div style={styles.aboutGrid}>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.cardIcon}>⚙️</div>
            <h3 style={styles.cardTitle}>40 Years of Excellence</h3>
            <p style={styles.cardText}>
              Four decades of industry expertise delivering innovative foundry solutions
            </p>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.cardIcon}>🔧</div>
            <h3 style={styles.cardTitle}>Omega-Technology Design</h3>
            <p style={styles.cardText}>
              Cutting-edge technology for superior performance and efficiency
            </p>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.cardIcon}>🌱</div>
            <h3 style={styles.cardTitle}>Eco-Friendly Solutions</h3>
            <p style={styles.cardText}>
              Sustainable and environmentally responsible manufacturing processes
            </p>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.cardIcon}>🎯</div>
            <h3 style={styles.cardTitle}>Customized Turnkey Solutions</h3>
            <p style={styles.cardText}>
              Tailored solutions designed to meet your specific requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ ...styles.section, backgroundColor: '#f8f9fa' }}>
        <h2 style={styles.sectionTitle}>
          Our Services
          <div style={styles.sectionTitleUnderline}></div>
        </h2>
        
        {/* Service Images Gallery */}
        <div style={styles.imageGallery}>
          <img 
            src="/images/sand-plant.jpg" 
            alt="Phenolic Sand Plant Equipment" 
            style={styles.galleryImage}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <img 
            src="/images/heat-treatment.jpg" 
            alt="Heat Treatment Furnaces" 
            style={styles.galleryImage}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <img 
            src="/images/furnace-1.jpg" 
            alt="Industrial Furnace Solutions" 
            style={styles.galleryImage}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        <div style={{ ...styles.aboutGrid, marginTop: '4rem' }}>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.cardIcon}>🏭</div>
            <h3 style={styles.cardTitle}>Phenolic Sand Plant</h3>
            <p style={styles.cardText}>
              Complete turnkey solutions for phenolic resin sand plant setup and installation
            </p>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.cardIcon}>🔥</div>
            <h3 style={styles.cardTitle}>Heat Treatment Furnace</h3>
            <p style={styles.cardText}>
              Gas, oil, and electric furnaces for all heat treatment applications
            </p>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.cardIcon}>⚒️</div>
            <h3 style={styles.cardTitle}>Foundry Equipment</h3>
            <p style={styles.cardText}>
              Ladle, ladle preheater, swing grinder, and sand mixture equipment
            </p>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.cardIcon}>🌍</div>
            <h3 style={styles.cardTitle}>Pollution Control Plant</h3>
            <p style={styles.cardText}>
              Foundry's first line of defense against pollution with advanced systems
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Our Key Machines
          <div style={styles.sectionTitleUnderline}></div>
        </h2>
        
        {/* Product Images Gallery */}
        <div style={styles.imageGallery}>
          <img 
            src="/images/machines-1.jpg" 
            alt="Sand Processing Machines" 
            style={styles.galleryImage}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <img 
            src="/images/machines-2.jpg" 
            alt="Industrial Equipment" 
            style={styles.galleryImage}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <img 
            src="/images/furnace-2.jpg" 
            alt="Furnace Systems" 
            style={styles.galleryImage}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        <div style={{ ...styles.productsGrid, marginTop: '4rem' }}>
          <div
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>Sand Mixer</h3>
              <ul style={styles.productList}>
                <li style={styles.productItem}>✓ High-efficiency continuous sand mixing</li>
                <li style={styles.productItem}>✓ Uniform binder coating</li>
                <li style={styles.productItem}>✓ Easy maintenance design</li>
              </ul>
            </div>
          </div>

          <div
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>Pneumatic Sand Conveyor</h3>
              <ul style={styles.productList}>
                <li style={styles.productItem}>✓ High-speed sand transfer system</li>
                <li style={styles.productItem}>✓ Dust-free conveying</li>
                <li style={styles.productItem}>✓ Compact and energy-efficient</li>
              </ul>
            </div>
          </div>

          <div
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>Sand Screening Machine</h3>
              <ul style={styles.productList}>
                <li style={styles.productItem}>✓ Multi-deck screening for accurate grain size</li>
                <li style={styles.productItem}>✓ Reduces impurities</li>
                <li style={styles.productItem}>✓ Improves casting quality</li>
              </ul>
            </div>
          </div>

          <div
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>Knockout Machine</h3>
              <ul style={styles.productList}>
                <li style={styles.productItem}>✓ Fast and efficient shakout of castings</li>
                <li style={styles.productItem}>✓ Heavy-duty design for durability</li>
                <li style={styles.productItem}>✓ Low vibration and noise</li>
              </ul>
            </div>
          </div>

          <div
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>Sand Cooler Classifier</h3>
              <ul style={styles.productList}>
                <li style={styles.productItem}>✓ Available from 1-20TPH</li>
                <li style={styles.productItem}>✓ Inlet mesh drop-out area protects heat exchanger</li>
                <li style={styles.productItem}>✓ High-efficiency heat exchanger cools sand</li>
              </ul>
            </div>
          </div>

          <div
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>Overband Magnetic Separator</h3>
              <ul style={styles.productList}>
                <li style={styles.productItem}>✓ Removes ferromagnetic particles from sand</li>
                <li style={styles.productItem}>✓ Small belt conveyor with magnet</li>
                <li style={styles.productItem}>✓ Automatically discharges collected metal</li>
              </ul>
            </div>
          </div>

          <div
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>Rotary Sand Dryers & Coolers</h3>
              <ul style={styles.productList}>
                <li style={styles.productItem}>✓ Highly efficient combustion system</li>
                <li style={styles.productItem}>✓ Temperature control for dry/cool sand</li>
                <li style={styles.productItem}>✓ Minimum operating cost</li>
              </ul>
            </div>
          </div>

          <div
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>Oscillating Conveyors</h3>
              <ul style={styles.productList}>
                <li style={styles.productItem}>✓ Special oscillating pattern for efficient conveying</li>
                <li style={styles.productItem}>✓ Continuous-duty feeding</li>
                <li style={styles.productItem}>✓ Designed for downstream equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>
          Get in Touch
          <div style={styles.sectionTitleUnderline}></div>
        </h2>
        <div style={styles.contactGrid}>
          <div style={styles.contactCard}>
            <h3 style={styles.contactTitle}>📍 Office Address</h3>
            <div style={styles.contactInfo}>
              D5-1103, NIRALA ASPIRE<br />
              Sector-16, Greater Noida West<br />
              201308 (U.P), India
            </div>
          </div>
          <div style={styles.contactCard}>
            <h3 style={styles.contactTitle}>🏭 Works Address</h3>
            <div style={styles.contactInfo}>
              E-203, KAVI NAGAR<br />
              INDUSTRIAL AREA<br />
              GHAZIABAD-201009 (U.P), India
            </div>
          </div>
          <div style={styles.contactCard}>
            <h3 style={styles.contactTitle}>📞 Contact Information</h3>
            <div style={styles.contactInfo}>
              <strong>Phone:</strong> +91-9999499355<br />
              <strong>Email:</strong> dse.services499356@gmail.com<br />
              <strong>Hours:</strong> Mon-Sat, 9:00 AM - 6:00 PM
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={{ margin: 0 }}>
          © 2024 DS Engineering Services. All Rights Reserved. | Excellence in Foundry Solutions for 40+ Years
        </p>
      </footer>
    </div>
  );
};

export default Index;
