import React from 'react';
import {Formik} from 'formik';

const AddIssue = () => {

  const addIssue = async (formdata) => { 
    const response = await fetch('http://localhost:5000/issue/add', {
      method: 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    });

    console.log(response.status);
    
  }

    return (
        <section className="vh-100" style={{ backgroundColor: "Light Blue" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                  <div className="Cardbody p-5">
                    <h3 className="mb-5 text-center">ADD ISSUE</h3>
                    <Formik initialValues={{
                      title:'',
                      description: '',
                      category :'',
                      assignedby:'',
                      assignedto:'',
                      team:'',
                      createdAt: new Date() }} onSubmit={addIssue}>
                      {({ values, handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <label className="form-label" htmlFor="typeTitleX-2">
                              Title
                            </label>
                            <input
                              type="title"
                              id="title"
                              value={values.title}
                              onChange={handleChange}
                              className="form-control form-control-lg mb-4"
                            />
                          <div className="form-outline mb-4">
                            <input
                              type="description"
                              id="description"
                              value={values.description}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="description">
                              Description
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="category"
                              id="category"
                              value={values.category}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="description">
                               Category
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="assignedby"
                              id="assignedby"
                              value={values.assignedby}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="description">
                              Assigned By
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="assignedto"
                              id="assignedto"
                              value={values.assignedto}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="description">
                              Assigned To
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="team"
                              id="team"
                              value={values.team}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="team">
                              Team
                            </label>
                          </div>
                          
                        
                          <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Submit
                          </button>
                        </form>
                      )}
                    </Formik>
    
    
            
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>    
      )
}

export default AddIssue