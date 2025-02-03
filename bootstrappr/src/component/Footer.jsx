import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col lg={3} className="mb-4 mb-lg-0">
                        <h5 className="footer-title text-uppercase">About Me</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum ornare, nisl nec blandit viverra, eros dolor
                            auctor nisi, eget consectetur nibh nisi ac nisl.
                        </p>
                    </Col>
                    <Col lg={3} className="mb-4 mb-lg-0">
                        <h5 className="footer-title text-uppercase">Pages</h5>
                        <ul className="footer-list list-unstyled">
                            <li>
                                <Link to="/" className="text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white">About</Link>
                            </li>
                            <li>
                                <Link to="/product" className="text-white">Product</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white">Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} className="mb-4 mb-lg-0">
                        <h5 className="footer-title text-uppercase">Social Media</h5>
                        <ul className="footer-list list-unstyled">
                            <li>
                                <a href="#" target="_blank" className="text-white">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="text-white">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="text-white">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="text-white">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} className="mb-4 mb-lg-0">
                        <h5 className="footer-title text-uppercase">Newsletter</h5>
                        <p>
                            Subscribe to our newsletter to receive news and
                            updates.
                        </p>
                        <div className="d-flex">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Enter email address"
                            />
                            <button className="btn btn-primary">
                                Subscribe
                            </button>
                        </div>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <Row>
                    <Col className="text-center">
                        <p className="copyright mb-0">
                            Copyright &copy; 2025 All rights reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

