import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux"
import {addcart} from '../../slice/cartReducer'


const Card = ({ pizza }) => {

  const [quantity, setQuantity] = useState(1)
  const [show, setShow] = useState(false);
  const dispach = useDispatch();

  const addtocart = () => {
   
    dispach(addcart({img:pizza.image, name:pizza.name,price:pizza.price,key:pizza.key,_id:pizza._id,quantity:pizza,quantity}))
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);
  return (
    <>

      <div className="card col-md-4 my-20 " style={{padding:"20px",margin:"20px",borderStartEndRadius:"50px",width:"200px",height:"350px",borderRadius:"20p;x"}}>
        <img src={pizza.image} className="card-img-top" alt="..." onClick={handleShow} />
        <div className="card-body">
          <h5 style={{display:"inline",marginLeft:"20px"}} className="card-title">{pizza.name}</h5>
          <p className="card-text">{<>
          </>}</p>
          
          <p  md={6}>quantity: {1}</p>
            <p  md={6}>price: {pizza.price * quantity}</p>
            <p  md={6}><a  onClick={addtocart}  key={pizza._id}  className="btn btn-primary">
              add to cart
            </a>
            </p>
          
        </div>


        {/* modal */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>
          <img src={pizza.image} alt="" srcset="" />
          <Modal.Body>{pizza.description}</Modal.Body>

        </Modal>
      </div>
    </>
  )
}

export default Card