import React from 'react'
import "../App.css";
import { useForm } from "react-hook-form"
export default function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
    
    <div className="signup-form-container">
      <h2 className="signup-form-title">Create Account</h2>
      <form  onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="username"{...register("UN", {
            required: { value: true, message: "field Req" },
            maxLength: { value: 12, message: "username exceed" },
            minLength: { value: 6, message: "To Short for username" },
          })} />
          {errors.UN && <div className='text-red-500'>{errors.UN.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email/Phone No.</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  {...register("pw", {
            required: { value: true, message: "field req" },
            maxLength: { value: 15, message: "password exceed" },
            minLength: { value: 7, message: "To short for password" },
          })} />
            {errors.pw && <span className='text-red-500'>{errors.pw.message}</span>}
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
    </>
  )
}
