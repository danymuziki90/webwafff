import React from 'react'

const Login = () => {
  return (
      <div className=' py-32 px-32 md:sm:px-96   '>
      <div className='bg-slate-300 p-10 rounded-md'>
        <h3 className='font-extrabold py-5 '>Login Admin</h3>
       <div className='gap-20 '>
            <input type="email" name="" id="" placeholder=' User name'  className=' my-5  '/>
            <input type="password" name="" id="" placeholder=' password' className='md:sm:m-5  ' />
       </div>
       <button type='' className='my-5 px-5 py-2 bg-slate-950 text-3xl font-medium text-white rounded-sm'>Login</button>
      </div>
    </div>
  )
}

export default Login