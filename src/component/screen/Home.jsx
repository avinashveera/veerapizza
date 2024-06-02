import {  useSelector } from 'react-redux';


import Card from './Card';

const Home = () => {

const items=useSelector(state=>state.pizza)

const pizzas=items


  return (
    <>
    {
    
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className='container-fluid row my-4' >
    {
  pizzas.map((pizza)=>{

    return (
     
          <Card pizza={pizza}  key={pizza._id} />
      
    )})
    
    }
    </div>
 
    
    }

    </>
  )
}

export default Home