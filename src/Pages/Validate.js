const validation = (values) => {
    let errors = {}


    if (!values.name) {
        errors.name = "Name Required"
    }
    else if (values.name.length < 5) {
        errors.name = "Name must be more than 5 characters"
    }
    if (!values.email) {
        errors.email = "Email Required"
    }
    else if (values.email.length < 5) {
        errors.name = "Email must be more than 5 characters"
    }

    if (!values.password) {
        errors.password = "Password Required"
    }
    else if (values.password.length < 8) {
        errors.name = "Password should atleast contain 8 characters"
    }
   
     return errors

}

export default validation

