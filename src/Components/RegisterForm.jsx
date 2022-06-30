import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const RegisterForm = () => {

    const formState = { name: "", email: "", phone: "", state: "", city: "", country: "" }
    const [formData, setFormData] = useState(formState);
    const [formErros, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const { name, email, phone, city, state, country } = formData

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formData))
      
        setIsSubmit(true)

    }


    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@] +@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required !"

        }
        if (!values.email) {
            errors.email = "Email is required !"

        }

        if (!values.phone) {
            errors.phone = "PhoneNo is required !"
        }

        if (!values.state) {
            errors.state = "State is required !"
        }

        if (!values.city) {
            errors.city = "City is required !"
        }

        if (!values.country) {
            errors.country = "Country is required !"
        }

        return errors

    }

    return (
        <>

        { Object.keys(formErros).length == 0 && isSubmit ? <Successfull>Login Successful</Successfull> : Object.keys(formErros).length > 0 ? <Error>Please fill the form !</Error> : null}
            <ContainerDiv>
                <Title>
                <h1>Register</h1>
                </Title>
                <form action="" onSubmit={handleSubmit}>
                    <span>Name:</span>
                    <InputDiv color={name} check={formErros.name}>
                        <input type="text" name='name' value={name} onChange={handleChange} placeholder='Enter Your Name' />
                        <p>{formErros.name}</p>
                    </InputDiv>

                    <span>Email:</span>
                    <InputDiv color={email} check={formErros.email}>
                        <input type="email" name='email' value={email} onChange={handleChange} placeholder='Enter Your Email' />
                        <p>{formErros.email}</p>
                    </InputDiv>

                    <span>Mobile:</span>
                    <InputDiv color={phone} check={formErros.phone}>
                        <input type="number" name='phone' value={phone} onChange={handleChange} placeholder='Enter Your Mobile' />
                        <p>{formErros.phone}</p>
                    </InputDiv >

                    <span>Country:</span>
                    <InputDiv color={country} check={formErros.country}>
                        <input type="text" name='country' value={country} onChange={handleChange} placeholder='Enter Your country' />
                        <p>{formErros.country}</p>
                    </InputDiv>
                    <span>City:</span>
                    <InputDiv color={city} check={formErros.city}>
                        <input type="text" name='city' value={city} onChange={handleChange} placeholder='Enter Your city' />
                        <p>{formErros.city}</p>
                    </InputDiv>
                    <span>State:</span>
                    <InputDiv color={state} check={formErros.state}>
                        <input type="text" name='state' value={state} onChange={handleChange} placeholder='Enter Your state' />
                        <p>{formErros.state}</p>

                    </InputDiv>

                    <Submit type="submit" />
                </form>

            </ContainerDiv>
        </>
    )
}


const Successfull = styled.div`
    width: 40%;
    margin: auto;
    margin-top:20px;
    padding:3% 1%;
    background: #05b439;
    box-shadow: 1px 2px 3px #05f105;
    border-radius: 5px;
    text-align:center;
    color:#fff;

    @media(max-width: 1440px) {
        width: 20%;
        padding:1%;
    }

    @media(max-width: 720px) {
        width: 25%;
        padding:1%;
    }
`


const Title = styled.div`
   /* border: 1px solid #776060a7; */
    /* background: #7863b17f; */
    width: 60%;
    margin-left:0%;
    padding:0.1px 0px 0.1px 0px;
    border-radius:5px;
    margin-bottom:20px;
    
        h1{
        font-size : 20px;
        font-weight:600;
        color:#110c0c;
    }
    

`

const Error = styled.div`
    width: 40%;
    margin: auto;
    margin-top:20px;
    padding:3% 1%;
    background: #b42e05;
    box-shadow: 1px 2px 3px #f19305;
    border-radius: 5px;
    text-align:center;
    color:#fff;
    @media(max-width: 1440px) {
        width: 20%;
        padding:1%;
    }

    @media(max-width: 720px) {
        width: 25%;
        padding:1%;
    }
`


const Submit = styled.input`
    width:40%;
    height:40px;
    background: #ec0be1;
    color:#fff;
    border-radius:5px;
    border:none;
    font-size:14px;
    box-shadow:1px 2px 3px black;
    outline:none;
    margin-top:3%;
    
    :active{
        box-shadow: 0px 2px black;
        transform:translateY(3px)
    }
`

const ContainerDiv = styled.div`
    width:60%;
    margin:auto;
    background: #d6f7e2;
    padding:2% 0%;
    margin-top:1%;
    border:5px solid #fff;
    box-shadow:1px 2px 3px gray;
    margin-bottom:20px;
    span{
        margin-right:42%;
        color:#443e3e;
        font-weight:600;
        
    };

   

    @media(max-width:1440px) {
        width: 40%;
    }
`

const InputDiv = styled.div`

  width:60%;
  margin:auto;
  padding:5px 0px;
  height:30px;
 margin-bottom:40px;
 
 p{
     padding:0;
     font-size:12px;
     position:absolute;
     margin:3px 5px 0px ;
     color:#a12303;
     
    }
    
    input{
    box-shadow:1px 2px 3px gray;
    padding:4%;
    width:90%;
    height:80%;
    border : ${props => (props.color) ? "none" : (props.check) ? "1px solid #f53201" : "none"};
    outline:none;
    font-size:15px;
    border-radius:5px;
    color: #4a9bd1;
    :focus{
        border:none;
        background-color: #05d4b2;
        color:#fff
    }
  }




`
