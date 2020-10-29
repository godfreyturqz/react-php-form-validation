export default function validate(values){
    let errors = {}
    // firstname
    if(!values.firstname.trim()){
        errors.firstname = "First name required"
    }
    // lastname
    if(!values.lastname.trim()){
        errors.lastname = "Last name required"
    }
    // email
    if(!values.email){
        errors.email = "Email required"
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
        errors.email = "Email address is invalid"
    }
    // password
    if(!values.password){
        errors.password = "Password is required"
    }
    else if (values.password.length < 6){
        errors.password = "Password needs to be 6 characters or more"
    }
    // cpassword
    if(!values.cpassword){
        errors.cpassword = "Password is required"
    }
    else if(values.cpassword !== values.password){
        errors.cpassword = "Password do not match"
    }

    return errors

}