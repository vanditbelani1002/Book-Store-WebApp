import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Popup({orderPopup, handleOrderPopup}){

    const notify = () => {
            toast.success('Order placed Successfully', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setTimeout(() => {
                handleOrderPopup();
            }, 6000);
    };

  return (
    <>
    {
        orderPopup && (
            <div className='h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm'>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px]'>
                    {/* header  */}
                    <div className='flex items-center justify-between'>
                        <h1>Order Your Book</h1>
                        <div>
                        <IoCloseOutline className='text-2xl cursor-pointer' onClick={()=>handleOrderPopup(false)} />
                        </div>
                    </div>
                    {/* Form Body  */}
                    <div className='mt-4'>
                        <input type="text" placeholder='Name' className='w-full rounded-full mb-4 border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1' />
                        <input type="email" placeholder='Email' className='w-full rounded-full mb-4 border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1' />
                        <input type="text" placeholder='Address' className='w-full rounded-full mb-4 border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1' />
                        <div className='flex justify-end'>
                            <button className='bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary' onClick={notify}>Order Now</button>
                            
                        </div>
                    </div>
                </div>
                <ToastContainer position="bottom-center"
                                autoClose={5000}
                                newestOnTop={false}
                                hideProgressBar={false}
                                rtl={false}
                                closeOnClick
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored" />
            </div>)
    }
    </>
  )
}

export default Popup
