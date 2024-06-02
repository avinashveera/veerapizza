import Cartcard from './Cartcard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { cartDt, addPizza, minPizza } from '../slice/cart'
import { showcart } from '../slice/showCart';


const Cart = () => {
  const dispach = useDispatch();
  dispach(showcart())
  const addcart = useSelector(state => state.addcart.value)
  const cartArry = useSelector(state => state.cart.value)
  const tot = cartArry.map((data) => { return data.quantity * data.price })

  useEffect(() => {
    dispach(cartDt())

  }, [])


  const amont = () => {
    let sum = 0;
    for (let index = 0; index < tot.length; index++) {
      sum += tot[index]

    }
    return sum;
  }
  return (
    <>

      <h1 style={{ textAlign: "center" }}>YOUR BAG</h1>

      <div className='mainContainer' style={{ display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "center", margin: "50px 50px" }}>



        <div className='containerCart1' style={{ flex: "1" }}>

          <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 20px" }}>
            <button style={{ border: "1px solid black", padding: "5px 20px" }}>CONTINING SHOPPING</button>


          </div>

          {
            cartArry ? cartArry.map((cartitem) => {
              const { img, name, _id, price, quantity } = cartitem


              return (

                <Cartcard
                  name={name}
                  img={img}
                  _id={_id}
                  price={price * quantity}
                  key={_id}
                  addpizza={() => { dispach(addPizza({ _id: _id })) }}
                  minPizza={() => { dispach(minPizza({ _id: _id })) }}
                  quantity={quantity}
                />

              )

            }) : <>

            </>
          }


        </div>

        <div style={{ position: "relative", flex: "1" }}>
         
          <div>
            <h1>Order summery</h1>
            <p>subtotal ₹  {amont()}</p>
            <p>estimate shipping ₹ 20</p>
            <p>total ₹{20 + amont()}</p>
            <button>CHECKOUT</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Cart