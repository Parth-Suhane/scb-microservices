import React from 'react';
import useForm from '../hooks/useForm';

const RegistrationForm = () => {
    const { handleChange, handleSubmit,user } = useForm();

    return (
        <div>

            <h1>RegistrationForm</h1>  <hr />
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <label>User Name</label>
                    <input
                        type="text"
                        name="userName"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}

                    />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        onChange={handleChange}

                    />
                </div>

                <div>
                    <button>Submit</button>
                </div>

            </form>

            <hr/>
          

        </div>
    );
};

export default RegistrationForm;