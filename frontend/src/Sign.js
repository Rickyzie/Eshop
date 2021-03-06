import React,{useState} from "react";
import Header from "./components/Header"
import LoadingBox from "./components/LoadingBox"
import {Container , Form , Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import axios from "axios"

function Sign() {
    const { register, handleSubmit } = useForm();
    const [res,setRes] = useState("")
    const [loading,setLoading] = useState(false)
    const postData = async (data) => {
        setLoading(true)
        await axios.post('/api/sign',data)
        .then( (response) => {
            setRes(response.data);
            setLoading(false)
        })
        .catch( (error) => console.log(error))}
    return (
        <div>
            <Header/>
            <Container className="justify-content-center" style={{display:"flex",marginTop:200}}>            
                <Form onSubmit={handleSubmit(data=>postData(data))} className="w-50  text-white happy" style={{padding:30}}>
                    <Form.Group className="mb-3">
                        <Form.Label>暱稱</Form.Label>
                        <Form.Control {...register("name")} placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>電子郵件</Form.Label>
                        <Form.Control {...register("email")} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>密碼</Form.Label>
                        <Form.Control {...register("password")} placeholder="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div style={{marginBottom:20}}>{loading?<LoadingBox/>:<p></p>}{res}</div>
                    </Form.Group>
                    <Button className="btn-warning text-dark"variant="primary" type="submit">
                    提交註冊
                    </Button>
                </Form>              
            </Container>
        </div>
    );
  }
  
  export default Sign;