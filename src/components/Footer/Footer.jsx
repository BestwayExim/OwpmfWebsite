import React from 'react'
import "./Footer.css";

import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div>
        <Container>
        <Row className='footerr'>
           
      <Col md={4} sm={6} xs={6} className='mt-2'> 
      <Row >
      <Col md={6} className=''>
      <div style={{textAlign:"left"}} className='container'>
                    <h6  style={{fontWeight:800}} className="text-uppercase mt-5">ONER ACTIVE</h6>
                    <ul style={{ }} className="list-unstyled mb-0 container ">
                      <li>
                        <a className="text-secondary" href="#!">About us</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Careers</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Sitemap</a>
                      </li>
                      <li>
                      </li>
                    </ul>
                </div>
      </Col>
       
      <Col md={6} className='text-center container' >
      <div style={{textAlign:"left"}} className='top-catogry container  mt-5'>
      <h6  style={{fontWeight:800}} className="text-uppercase ">SERVICE</h6>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a className="text-secondary" href="#!" >Size Guide</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Contact</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Shipping</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Returns</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Track your order</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Help Center</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">GTC</a>

                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Privacy Policy</a>

                      </li>
                      <li>
                        <a className="text-secondary" href="#!"><i class="fa-solid fa-earth-americas fa-lg" style={{color:'green'}}></i> Country</a>

                      </li>
                    </ul>
                </div>


               
      </Col>
      <div style={{padding:"20px" ,marginBottom:"30px"}} className='cardd mt-2'>
<div className="pay">
    <img src="https://cdn.shopify.com/s/files/1/0744/0203/files/payment-visa.svg?607402
" alt="" />
</div>
<div className="pay">
    <img src="	https://cdn.shopify.com/s/files/1/0744/0203/files/payment-paypal.svg?607402
" alt="" />
</div>
<div className="pay">
    <img src="https://cdn.shopify.com/s/files/1/0744/0203/files/payment-mastercard.svg?607402
" alt="" />
</div>
<div className="pay">
    <img src="	https://cdn.shopify.com/s/files/1/0744/0203/files/payment-american-express.svg?607402" style={{width:"30px"}} alt="" />
</div>
<div className="pay">
    <img src="		https://cdn.shopify.com/s/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg
" alt="" />
</div>
                </div>

      </Row>
      </Col>

      <Col md={4}  sm={6} xs={6} className='text-center mt-5'> 
      <Row >
      <Col md={6} className='text-center' >
      <div style={{textAlign:"left"}} className='top-catogry '>
                    <h6  style={{fontWeight:800}} className="text-uppercase ">TOP CATEGORIES
</h6>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a className="text-secondary" href="#!">Bottoms & Leggings</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Sports Bras</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">Hoodies & Jackets</a>
                      </li>
                      <li>
                        <a className="text-secondary" href="#!">T-shirts & Tops</a>
                      </li>
                    </ul>
                </div>
      </Col>
       
      <Col md={6} >
      <div style={{textAlign:"left"}} className='top-reward'>
                    <h6 style={{fontWeight:800}} className="">REWARDS</h6>
                    <ul className="list-unstyled mb-0">
                     <li>
  <a classname="" href="#!" style={{color:" rgb(134, 134, 136)"}}><i className="fa-solid fa-star" style={{color: '#63E6BE'}} />Loyalty Club </a>
</li>

                
                    
                    </ul>
                </div>
      </Col>

      
      </Row>
      </Col> 

      <Col md={4} className='container text-center' >
       <Row className='main-contain mt-5' >
           <div className='input-boxs'>
           <h6 style={{fontWeight:700}} className="text-uppercase ms-4">SIGN UP FOR OUR NEWSLETTER</h6>
           <input className='inpu' type='text' placeholder='email'/><button className='btn-last'><i class="fa-solid fa-greater-than" style={{color:'white'}}/></button>
            
            <div className='out-log pt-1 mt-4'>
                <div className="logg"><i class="fa-brands fa-instagram fa-lg" style={{color:"white"}}></i></div>
                <div className="logg"><i class="fa-brands fa-facebook" style={{color:"white"}}></i></div>
                <div className="logg"><i class="fa-brands fa-youtube" style={{color:"white"}}></i></div>
                <div className="logg"><i class="fa-brands fa-tiktok" style={{color:"white"}}></i></div>
                <div className="logg"><i class="fa-brands fa-twitter" style={{color:"white"}}></i></div>
                <div className="logg"><i class="fa-brands fa-pinterest" style={{color:"white"}} ></i></div>
                <div className="logg"><i class="fa-brands fa-square-snapchat" style={{color:"white"}}></i></div>
            </div>
            <div className='out-log pt-1 mt-3'>
               <div className='LOG-last'>
                <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/logo_icon_black.svg?v=1597160328" alt="" srcset="" />
               </div>
            </div>

           </div>
       </Row>
      </Col>
      

    
        </Row>
        <div className='fw-bold  mt-2 container ' style={{fontSize:"14px" ,textAlign:"left"}}>© 2024 Oner Active | All Rights Reserved.</div>
        </Container> 
      
    </div>
  )
}

export default Footer