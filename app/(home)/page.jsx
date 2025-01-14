import Image from "next/image";
import './style.css'

export default function Home() {
    return (
        <body>

            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo-container">
                        <Image
                            src="/nec_logo-removebg-preview.png"
                            alt="NEC Logo"
                            className="nec-logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </nav>



            <section className="hero-section" id="home">
                <div className="hero-text">
                    <h1>NUST <br /> ENTREPRENEURS <br /> CLUB</h1>
                    <p>A vibrant community of innovators,<br />dreamers, and doers ready to<br />disrupt the status quo.</p>
                    <a href="#about-us" className="btn">See More</a>
                </div>
                <div className="hero-image-container">
                    <Image
                        src="/hover_secton-removebg-preview.png"
                        alt="Hero Image"
                        className="hero-image"
                        width={100}
                        height={100}
                    />
                </div>
            </section>


            <section className="about-us" id="about-us">
                <h2>About Us</h2>
                <div className="about-content">
                    <p>
                        We are a leading technology company focused on delivering cutting-edge solutions to transform
                        industries and businesses. Our expertise spans across various domains including Cloud Computing,
                        AI, and Cybersecurity. At NEC Technologies, we strive to innovate and create impactful solutions
                        that drive change and empower businesses to achieve their goals.
                    </p>
                    <Image
                        src="/about_us-removebg-preview (1).png"
                        alt="About Us Image"
                        width={100}
                        height={100}
                    />
                </div>
            </section>

            <section className="upcoming-events" id="upcoming-events">
                <h2>Upcoming Events</h2>
                <div className="event-gallery">
                    <div className="event-card">
                        <Image
                            src="/upcoming events3.jpg"
                            alt="Event Image 1"
                            width={100}
                            height={100}
                        />
                        <p>Event Name 1</p>
                    </div>
                    <div className="event-card">
                        <Image
                            src="/upcoming events4.jpg"
                            alt="Event Image 2"
                            width={100}
                            height={100}
                        />
                        <p>Event Name 2</p>
                    </div>
                    <div className="event-card">
                        <Image
                            src="/upcoming events.jpg"
                            alt="Event Image 3"
                            width={100}
                            height={100}
                        />
                        <p>Event Name 3</p>
                    </div>
                    <div className="event-card">
                        <Image
                            src="/upcoming events2.jpg"
                            alt="Event Image 4"
                            width={100}
                            height={100}
                        />
                        <p>Event Name 4</p>
                    </div>
                </div>
            </section>


            <section className="stay-in-touch">
                <h3>Stay in Touch</h3>
                <p>We’d love to connect with you on our social platforms. Follow us for updates!</p>
                <div className="social-icons">
                    <a href="#" className="social-icon twitter">
                        <Image
                            src="/twitter logo.webp"
                            alt="Twitter Icon"
                            width={100}
                            height={100}
                        />
                        Twitter
                    </a>
                    <a href="#" className="social-icon youtube">
                        <Image
                            src="/youtube logo.jpeg"
                            alt="YouTube Icon"
                            width={100}
                            height={100}
                        /> YouTube
                    </a>
                    <a href="#" className="social-icon instagram">
                        <Image
                            src="/instagram lgo.webp"
                            alt="Instagram Icon"
                            width={100}
                            height={100}
                        /> Instagram
                    </a>
                </div>
            </section>

            <footer id="contact-us">
                <div className="footer-container">
                    <div className="footer-logo">
                        <Image
                            src="/logo-removebg-preview.png"
                            alt="NEC Logo"
                            width={100}
                            height={100}
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.</p>
                    </div>

                    <div className="footer-navigation">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#upcoming-events">Events</a></li>
                            <li><a href="#contact-us">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact-info">
                        <h4>Contact Info</h4>
                        <p><i className="fa fa-phone"></i> +1 800-123-4567</p>
                        <p><i className="fa fa-envelope"></i> info@nec.com</p>
                        <p><i className="fa fa-map-marker"></i> 123 NEC Street, City, Country</p>
                    </div>

                    <div className="footer-social">
                        <h4>Social</h4>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </footer>


        </body>

    );
}
