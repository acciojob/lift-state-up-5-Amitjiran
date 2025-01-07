import React, { useState } from 'react'
import './IsLoggedIn.css'
const IsLoggedIn = () => {
const [islogin,setIslogin]=useState(false);

const handleClick=(e)=>{
    setIslogin(true);
    console.log(islogin);
}
    return(

    <div>
        {
        !islogin ?(       
    <div>
 <span className='username'><p>Username:</p> <input placeholder="Name" type="text"  ></input></span>
 <span className='password'><h2>Password:</h2> <input type='password' ></input></span>
<button onClick={(e)=>handleClick(e)}>Login</button>
        </div>
            ):(   
    <div>
    <p> You are logged in!</p>
    </div>
)
}
</div>
)
}
export default IsLoggedIn