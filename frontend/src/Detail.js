import React ,  { useEffect } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import {useParams} from "react-router-dom";
import LoadingBox from "./components/LoadingBox"
import MessageBox from "./components/MessageBox"
import axios from "axios"
import {useState} from "react"
function Detail() {
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [detail,setDetail] = useState("")
    useEffect(()=>{
        const fetchData = async () =>{
            try{
            setLoading(true);
            const {data} = await axios.get(`/api/product/${id}`);
            setDetail(data.detail)
            setLoading(false);
            }catch(err){
            setLoading(false);
            setError(err.message)
            }
        };
        fetchData()
        },[])
    return (
        <div>
        {loading? (
          <LoadingBox/>
        ):(error? (
        <MessageBox>{error}</MessageBox>
        ):(
          <div>
          <Header />
          <Footer />\
          <p>{detail}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Detail;