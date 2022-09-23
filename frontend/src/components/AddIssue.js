import React from 'react'

const AddIssue = () => {
  return (
    return (
        <section className="vh-100" style={{ backgroundColor: "Light Blue" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                  <div className="Cardbody p-5 text-center">
                    <h3 className="mb-5">Sign In</h3>``
                    <Formik initialValues={{ email: '', password: '' }} onSubmit={loginSubmit}>
                      {({ values, handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="typeEmailX-2">
                              Email
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="typePasswordX-2">
                              Password
                            </label>
                          </div>
                          {/* Checkbox */}
                          <div className="form-check d-flex justify-content-start mb-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="form1Example3"
                            />
                            <label className="form-check-label" htmlFor="form1Example3">
                              {" "}
                              Remember password{" "}
                            </label>
                          </div>
                          <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Login
                          </button>
                        </form>
                      )}
                    </Formik>
    
    
                    <hr className="my-4" />
                    <button
                      className="btn btn-lg btn-block btn-primary"
                      style={{ backgroundColor: "#dd4b39" }}
                      type="submit"
                    >
                      <i className="fab fa-google me-2" /> Sign in with google
                    </button>
                    <button
                      className="btn btn-lg btn-block btn-primary mb-2"
                      style={{ backgroundColor: "#3b5998" }}
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2" />
                      Sign in with facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
      )
  )
}

export default AddIssue