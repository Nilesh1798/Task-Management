import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      console.log(data);
      await axios.post("http://localhost:8000/api/user/login", data, {
        withCredentials:true
      })
      .then((response) => {
        console.log(response);
        dispatch(setCredentials(response.data));
        navigate("/dashboard");
      })
    } catch (error) {
      console.log("Error Login:: " + error)
    }
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen lg:flex-row bg-cyan-100'>
      <div className='flex flex-col items-center justify-center w-full gap-0 md:w-auto md:gap-40 md:flex-row'>
        {/* left side */}
        <div className='flex flex-col items-center justify-center w-full h-full lg:w-2/3'>
          <div className='flex flex-col items-center justify-center w-full gap-5 md:max-w-lg 2xl:max-w-3xl md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 px-3 py-1 text-sm text-white bg-blue-400 border-4 border-blue-800 rounded-full md:text-base'>
              Manage all your task in one place!
            </span>
            <p className='flex flex-col gap-0 text-4xl font-black text-center text-black md:gap-4 md:text-6xl 2xl:text-7xl'>
              <span>Assign Task On</span>
              <span className="text-transparent bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text">Taskify</span>
            </p>

            <div className='cell'>
              <div className='circle rotate-in-up-left'></div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='flex flex-col items-center justify-center w-full p-4 md:w-1/3 md:p-1'>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
          >
            <div className=''>
              <p className='mb-4 text-3xl font-bold text-center text-blue-600'>
                Login
              </p>
              <p className='text-base text-center text-gray-900 '>
                Keep all your credential safe.
              </p>
            </div>

            <div className='flex flex-col font-bold gap-y-5'>
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full'
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='your password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

              <span className='text-sm text-gray-500 cursor-pointer hover:text-blue-600 hover:underline'>
                Forget Password?
              </span>

              <span className="text-center">Create an account ? {" "}
                <Link to='/sign-up' className='font-bold cursor-pointer hover:text-blue-600 hover:underline'>
                  Sign Up
                </Link>
              </span>

              <Button
                type='submit'
                label='Submit'
                className='w-full h-10 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-900'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
