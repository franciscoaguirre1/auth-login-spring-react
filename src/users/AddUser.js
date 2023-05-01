import React from 'react'

export default function AddUser() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2  shadow'>
                    <h2>Register User</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="Name" className="d-flex justify-content-start mb-3">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="d-flex justify-content-start mb-3">
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your username"
                                name="username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="d-flex justify-content-start mb-3">
                                E-mail
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="email"
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        {/* <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
