import pro1 from '../images/lead1.jpg';
import pro2 from '../images/lead2.jpg';
import pro3 from '../images/lead3.jpg';

const About = () => {
  return (
    <section className="about-section bg-light py-5">
      <div className="container">
        <h1 className="display-4 text-center mb-4">About Us</h1>
        <p className="text-center mb-5">
          We're a team of awesome people who are passionate about delivering exceptional service to our customers. We believe in working together to achieve great things and having fun while doing it.
        </p>
        <hr className="my-4" />
        <div className="team-section">
          <h2 className="display-5 text-center mb-4">Our Awesome Team</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="team-member bg-white shadow p-4">
                <img className="img-fluid rounded-circle mb-3" src={pro1} alt="Jane Doe" />
                <h3 className="mt-3">Jane Doe</h3>
                <p className="text-muted">CEO - The Big Cheese</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-member bg-white shadow p-4">
                <img className="img-fluid rounded-circle mb-3" src={pro2} alt="John Smith" />
                <h3 className="mt-3">John Smith</h3>
                <p className="text-muted">CTO - The Tech Wizard</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-member bg-white shadow p-4">
                <img className="img-fluid rounded-circle mb-3" src={pro3} alt="Emily Johnson" />
                <h3 className="mt-3">Emily Johnson</h3>
                <p className="text-muted">COO - The Operations Mastermind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

