import React,{useState,useEffect} from 'react';
import RegistrationForm from './RegistrationForm';
import Success from './Success';
import ListUsers from './ListUsers';
import axios from 'axios';
const Form = (props) => {

    const[isSubmited,setIsSubmitted]=useState(false);
    const[user,setUser]=useState({});
    let { params } = props.match;
    let { id } = params;
    console.log("ID: "+id);


    useEffect(()=>{

        axios.get(`http://localhost:8080/api/users/${id}`)
        .then(response=>response.data)
        .then(user=>{
            setUser(user)
        })
    },[])


    const submitForm = () => {

        console.log("form submited");
        setIsSubmitted(true);
    }

    return (
        <div>
            {isSubmited?<ListUsers/>:<RegistrationForm user={user} submitForm={submitForm} />}
            
        </div>
    );
};

export default Form;