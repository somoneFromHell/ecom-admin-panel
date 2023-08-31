import React from 'react'
import { Container } from 'reactstrap'


const EmailMaster = () => {
  return (
    <React.Fragment>
<div className="page-content">
    <Container fluid>
      <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
        <div className="file-manager-content w-100 p-4 pb-0">
          <div className="hstack mb-4">
            <h5 className="fw-semibold flex-grow-1 mb-0">
              Velzon Admin & Dashboard{" "}
              <span className="badge bg-primary align-bottom ms-2">
                v1.7.0
              </span>
            </h5>
            <div className="hstack gap-2">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button className="btn btn-icon fw-semibold btn-soft-danger">
                  <i className="ri-arrow-go-back-line"></i>
                </button>
                <button className="btn btn-icon fw-semibold btn-soft-success">
                  <i className="ri-arrow-go-forward-line"></i>
                </button>
              </div>
            </div>
          </div>
          <h1>this is email page</h1>
        </div>
      </div>
    </Container>
  </div>
    </React.Fragment>
    
  )
}

export default EmailMaster