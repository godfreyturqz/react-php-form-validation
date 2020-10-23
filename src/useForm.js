import { useEffect, useState } from "react";
import Axios from "axios";

const useForm = validate => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        cpassword: ''
    })
    const[errors, setErrors] = useState({})

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values))
    }

    useEffect(()=>{
        console.log(Object.keys(errors).length)
        console.log(!errors)
        if(Object.keys(errors).length === 0){
            console.log('no error')

            let formData = new FormData()
            formData.append('signup', true)
            formData.append('firstname', values.firstname)
            formData.append('lastname', values.lastname)
            formData.append('email', values.email)
            formData.append('password', values.password)

            const url = 'http://localhost/server/form-signup/'

            Axios.post(url, formData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }

        return ()=> {
            setValues({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                cpassword: ''
            })
        }
    }, [errors])

    return [values, errors, handleChange, handleSubmit]
}

export default useForm
