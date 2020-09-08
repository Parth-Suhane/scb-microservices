import React, { useState } from 'react';

const useForm = () => {


    const [user, setUser] = useState({
        userName: '',
        password: '',
        password2: ''
    })

    function handleChange(e) {
        let { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submited...  " );
        console.log(user);
    }

    return { handleChange, handleSubmit,user }

};

export default useForm;