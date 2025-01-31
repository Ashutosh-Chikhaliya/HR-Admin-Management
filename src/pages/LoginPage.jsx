import React from 'react'
import InputField from '../widgets/InputField'
import Button from '../widgets/Button'


const handleSubmit = () => {
    console.log("button clicked")
}

const LoginPage = () => {
    return (
        <div className='flex w-[100vw] h-[100vh] border-2 justify-center items-center p-2'>
            <div className='left-part w-[55%] h-full p-5'>
                <div className='bg-[#f8f6fe] h-full overflow-hidden rounded-4xl'></div>
            </div>

            <div className='flex flex-col justify-start right-part w-[45%] ps-12 gap-8'>
                <div>
                    <img src="src\assets\logo\logoText.svg" alt="" />
                </div>

                <div className='w-[60%] flex flex-col gap-5 '>
                    <div>
                        <h5 className='font-bold text-2xl'>Welcome 🤞</h5>
                        <p className='text-xs text-gray-500 mt-1'> Please login here </p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-4'>
                            <InputField placeholder={"Enter Email"} type={"email"} />
                            <InputField placeholder={"Enter Password"} type={"password"} />
                        </div>

                        <div className='flex justify-between text-xs items-center'>
                            <div className='flex gap-1 items-center text-center '>
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <div className='text-[#7152F3]'>Forgot Password ?</div>
                        </div>
                    </div>

                    <div>
                        <Button onClick={handleSubmit} children={"Login"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

