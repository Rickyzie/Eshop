import React , {useState} from "react";
import axios from "axios"
import LoadingBox from "./LoadingBox"
import {Form,Button, Container} from "react-bootstrap"
import { useForm } from "react-hook-form";
function FormLog() {
  const { register, handleSubmit } = useForm();
  const [res,setRes] = useState("")
  const [loading,setLoading] = useState(false)
  const getMember = async () => {
    await axios.get('/api/welcome')
    .then( (response) => {
          response.data.status==='connect'?window.location.href = "/welcome":console.log(response);
        })
    .catch( (error) => console.log(error))}
  getMember()
  const postData = async (data) => {
    setLoading(true)
    await axios.post('/api/login',data)
    .then( (response) => {
          response.data.status==='connect'?window.location.href = "/welcome":setRes("帳號或密碼輸入錯誤");;
          setLoading(false)
        })
    .catch( (error) => console.log(error))}
  return (
    <Container className="justify-content-center" style={{display:"flex",marginTop:200}}>
      <Form onSubmit={handleSubmit((data) => data.email||data.password? postData(data): data)} className="w-50  text-white happy" style={{padding:30}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>電子郵件</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="Enter email" />
          <Form.Text className="text-white" >
            使用SSL加密技術 
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>密碼</Form.Label>
          <Form.Control  {...register("password")} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div style={{marginBottom:20}}>{loading?<LoadingBox/>:<p></p>}{res}</div>
        </Form.Group>
        <Button className="btn-warning text-dark"variant="primary" type="submit">
          登入
        </Button>
        <Button href="/Sign" className="btn-warning text-dark"variant="primary" >
         註冊
        </Button>
      </Form>
    </Container>
    
  );
}

  export default FormLog;