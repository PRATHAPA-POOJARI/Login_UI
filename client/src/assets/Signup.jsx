import { useState } from "react";
function Signup() {
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
                    className="form-control rounded-0" />
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
                    className="form-control rounded-0" />
                    </div>
                    
                 </form>
            </div>
        </div>
    )
}