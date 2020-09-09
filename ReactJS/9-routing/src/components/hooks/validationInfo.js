export default function validationInfo(user) {

    let errors = [];
    let {id, userName, password, password2,emailAddress } = user;

    if (!userName.trim()) {
        errors.userName = "User Name is required"
    } else if (userName.length < 4) {
        errors.userName = "User Name length should be minimum 4 characters long"
    }

    if (password.length === 0) {
        errors.password = "Password is required"
    }

    if (password2.length === 0) {
        errors.password2 = "Confirm Password is required"
    } else if (password2 !== password) {
        errors.password2 = "Password do not match"
    }

    if(!emailAddress){
        errors.emailAddress = "Email Address is required"
    }else if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(emailAddress)){
        errors.emailAddress="Invalid email address"
    }

    if(!id){
        errors.id="Id must be required";
    }



    return errors;

}