import React,{useState,useEffect} from 'react';

const useForm = (submitForm,validate) => {

    const[user,setUser]=useState({
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
            submitForm();
        }

    },[errors])
  
    return {handleChange,handleSubmit,errors}
};

export default useForm;