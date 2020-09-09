import React from 'react';
import useForm from './hooks/useForm';
import validate from './hooks/validationInfo';
const RegistrationForm = ({ submitForm }) => {

    const { handleChange, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="col-12 col-md-6">
            <div className="card">
                <div className="card-header">User Registration Form</div>
                <div className="card-body">
                    <form autoComplete="off" onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>ID</label>
                            <input
                                type="text"
                                name="id"
                                placeholder="id"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <p className="text-danger">{errors.id}</p>

                        </div>
                        <div className="form-group">
                            <label>User Name</label>
                            <input
                                type="text"
                                name="userName"
                                placeholder="Username"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <p className="text-danger">{errors.userName}</p>

                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                onChange={handleChange}

                            />
                            <p className="text-danger">{errors.password}</p>


                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="password2"
                                placeholder="Confirm Password"
                                className="form-control"
                                onChange={handleChange}

                            />
                            <p className="text-danger">{errors.password2}</p>

                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="text"
                                name="emailAddress"
                                placeholder="Email Address"
                                className="form-control"
                                onChange={handleChange}

                            />
                            <p className="text-danger">{errors.emailAddress}</p>

                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-primary" style={{ margin: "5px" }}>Submit</button>
                            <button className="btn btn-danger" style={{ margin: "5px" }}>Cancel</button>
                            <button type="reset" className="btn btn-warning" style={{ margin: "5px" }}>Reset</button>

                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default RegistrationForm;