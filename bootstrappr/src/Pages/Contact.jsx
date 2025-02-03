const Contact = () => {
    return (
      <>
        <div className="container my-5">
          <h1 className="display-4 text-center">Contact Us</h1>
          <p className="text-center">
            We would love to hear from you. Please fill out the form below to get in touch with us.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea className="form-control" id="message" rows="3"/>
                </div>
                <button type="submit" className="btn btn-primary" style={{marginTop:'20px'}}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Contact;
