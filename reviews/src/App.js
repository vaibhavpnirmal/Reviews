
import './App.css';
import people from './data'
import {useState} from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
function App() {

  const [index,setindex]=useState(0)
const {name,job,image,text}=people[index]

const next=()=>{
  setindex((next)=>{
    let move=(next+1)%people.length
    return move
  })

}
const pre=()=>{
  setindex((value)=>{
    let pre= ((value-1)+people.length)%people.length
    return pre
  })

}

  return (
  <>
  <main>
<article>
  <div className='image'> 
  <span className='quote-icon'>
  <RiDoubleQuotesL></RiDoubleQuotesL>
  </span>
<img src={image}  alt='manphoto'></img>

</div>

<h3>{name}</h3>
<h2>{job}</h2>
<p>{text}</p>
<button className='pre-btn' onClick={pre}><FaAngleLeft></FaAngleLeft></button>
<button className='next-btn' onClick={next}><FaAngleRight></FaAngleRight></button>


</article>




  </main>



  
  
  
  </>
  );
}

export default App;
