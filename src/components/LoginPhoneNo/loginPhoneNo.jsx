

import React, {useState, useEffect, useRef, useContext
} from 'react'
import { bgLogin } from '../../assets';
// import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/user';
import axios from 'axios';
const LoginEmail = () => {
  // const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");
  // const submit = handleSubmit((data) => setData(data));

const userRef = useRef();
const errRef = useRef();

const {setAuth} = useContext(AuthContext)

const [user, setUser] = useState('');
const [pwd, setPwd] = useState('');
const [errMsg, setErrMsg] = useState ('');
const [success, setSuccess] = useState(false);

useEffect(() => {
 userRef.current.focus();
}, [])

useEffect(() => {
  setErrMsg('');
}, [user, pwd])

const handleSubmit =  (e)=> {
  e.prevent.default(); 

  try{

    const response = axios.post("https://api.kiekky.com/users/",
    JSON.stringify({user, pwd}),
    {
      headers: {'content-Type': 'application/json'},
      withCredentials: true
    });
    setUser('');
    setPwd('');
    setSuccess(true);
  } catch(err){

  }

}
  return (
 
    <div >
     

 <div className="form-container  ">
  <div >
  <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} 
  aria-live='assertive' >{errMsg}</p>
  

  <form onSubmit={handleSubmit}>
    <label htmlFor="email"> Phone Number </label>
    <input className='w-full outline-none mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] '
  placeholder='Enter here'
     type="tel" id="email"  ref={userRef} onChange={ (e)=>
  setUser(e.target.value)}
    value={user} required/>

<label  className=' flex justify-between mt-5' htmlFor="password "> Password <span className='text-xs text-[#6A52FD]' >Forgot password?</span> </label>

    <input  className='w-full outline-none mt-1 rounded-md py-2 px-5 bg-[#F6F4FF]' type="password" id="password"  
     onChange={(e)=> 
  setPwd(e.target.value) }
    value={pwd} required placeholder='Enter password'/>

<button className='text-white w-full mt-5 rounded-md py-3 px-auto bg-[#6A52FD] '>
  Log In</button>


</form>
  </div>
  


 </div>



    </div>

  )

  }

export default LoginEmail;