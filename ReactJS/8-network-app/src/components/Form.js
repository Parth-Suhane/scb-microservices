import React,{useState} from 'react';
import RegistrationForm from './RegistrationForm';
import Success from './Success';

const Form = () => {

    const[isSubmited,setIsSubmitted]=useState(false);

    const submitForm = () => {

        console.log("form submited");
        setIsSubmitted(true);
    }

    return (
        <div>
            {isSubmited?<Success/>:<RegistrationForm submitForm={submitForm} />}
            
        </div>
    );
};

export default Form;