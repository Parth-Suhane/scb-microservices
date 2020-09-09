import React,{useState,useEffect} from 'react';
import axios from 'axios';
const useForm = (submitForm,validate) => {

    const[user,setUser]=useState({
        id:'',
        userName:'',
        password:'',
        password2:'',
        emailAddress:''
    })

    const handleChange= (e) => {
        const{name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    let[errors,setErrors]=useState({})
    let[isSubmited,setIsSubmitted]=useState(false);


    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(user);

        //handle errors
       setErrors(validate(user));
       setIsSubmitted(true);

       
       // submitForm();
       
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmited){

            axios.post('http://localhost:8080/api/users',user)
            .then(response =>response.data)
            .then(userObject =>{
                console.log(">>> Saved to DB <<<");
                console.log(userObject);
            })

            submitForm();
        }

    },[errors])
  
    return {handleChange,handleSubmit,errors}
};

export default useForm;