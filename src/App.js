import {React} from 'react';
// import Tweet from './Components/Tweet';
// import ComponentA from './Components/ComponentA';
import Home from './HOME/Home';

import'./App.css'

export default function App() {
  return (
    <Home/>
  )
//   const[count , setCount]=useState(0)
//   const[isRed , setRed]=useState(false);
//   const handeleIncrement = ()=> {
//     setCount(count + 1);
//     setRed(true);
//   };
//   /************************************************ */
//   const [name , setname]= useState({
//     firstname: "",
//     lastname: ""
//   });
//   /*************************************************************** */
//     const[counts , setCounts]= useState(0)    //setcount is a function
//     const[users ]= useState([
//       {name:'mohamed' , message:"hello mohamed", like:"true mohamed"},
//       {name:'youssef' , message:"hello youssef", like:"true youssef"},
//       {name:'Ali' , message:"hello Ali", like:"true Ali"},
//     ])
// /***************************************************************** */    
//     const[x , setX]=useState(0);
//     const[y , setY]=useState(0);
//     const localMousePosition =(e)=>{
//       setX(e.clientX);
//       setY(e.clientY);
//     };
//     useEffect( ()=>{
//       //console.log("useEffect called");
//       window.addEventListener("mousemove" ,localMousePosition );              //mousemove ta7rek el mouse\\ 
//     },[] );               //[] empty array dependency 3lashan el tkrarrr\\
// /***************************************************************** */    






// /*/////// */
//   return (
// <div className='main'>
// {/*                ///////                                   */}
//       <div className='app'>
//       <button className='btn' onClick={handeleIncrement}>Button</button>
//       <h1 className='NUMBER'>{count}</h1>
//       <h2 className={ isRed ? "Red" : ""}> change color to {count} </h2>
//       </div>
// {/***************** */}
//       <div className='app2'>
//         <input type="text" placeholder="Fname" value={name.firstname}  onChange={(e)=>setname({...name,firstname:e.target.value})}/>
//         <input type="text" placeholder="Lname" value={name.lastname} onChange={(e)=>setname({...name,lastname:e.target.value})}/>
//         <h1>Your firstname is {name.firstname} </h1>
//         <h1>Your lastname is {name.lastname}</h1>
//         </div>
// {/********************* */}
//       <div className="tweetStyle">
//       {users.map((users)=>(
//       <Tweet key={users.name} name={users.name} message={users.message} like={users.like}/>
//       ))}
//       <button onClick={()=>setCounts(counts + 1)}>increment</button>
//       <button onClick={()=>setCounts(counts -1)}>decrement</button>
//       <button onClick={()=>setCounts(0)}>Reset</button>
//       {counts}
//       </div>
// {/******************* */}
//       <div className='axis'>
//         <h1>X-{x}</h1>
//         <h1>Y-{y}</h1>
//       </div>
// {/******************* */}
// <div className='compo'>
//   <ComponentA />
// </div>




// </div>
//   )
}
  



