import { useState } from "react";
function Signup() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    // const [name,setName]=useState();
    return (
        <div>
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>

               <form>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input
                    type='text'
                    placeholder="Enter a name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0" 
                    onChange={(e)=>setName(e.target.value)}/>

                    </div>

                    <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input
                    type='text'
                    placeholder="Enter a name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0" 
                     onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email">
                        <strong>password</strong>
                    </label>
                    <input
                    type='password'
                    placeholder=" Enter password"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0" 
                     onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success  w-100 rounded-0">
                        Register
                    </button>
                    <p> Already have an </p>
                    <button className="pk">
                        Login
                    </button>
                 </form>
            </div>
        </div>
    );
}