import React, { useEffect } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import LoadingBox from "./components/LoadingBox"
import MessageBox from "./components/MessageBox"
import axios from "axios"
import Main from "./components/Main"
import {Container} from "react-bootstrap"
import Basket from "./components/Basket";
import {useState} from "react"
function Cart() {
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  useEffect(()=>{ 
    const fetchData = async () =>{
      try{
        setLoading(true);
        const {data} = await axios.get('/api/product');
        const products = data;
        setProducts(products);
        setLoading(false);
      }catch(err){
        console.log(err)
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
        <Main products={products}/>
        <Container>
        <Basket />
        </Container>
        <Footer/>
        </div>
      ))}
    </div>
  );
}

export default Cart;
