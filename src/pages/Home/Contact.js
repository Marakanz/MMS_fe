import React from 'react'

const Contact = () => {
    return (
        <div className='my-5 px-5 mx-4'>
            <div className='suscribe flex items-center justify-center'>
                <div className=''>
                    <h1 className='subtitle text-center my-5'>Suscribe to Our Newsletter</h1>
                    <p className="text-sm my-5">this way you don't miss out on our latest blog posts, lunch packs,
                        special offers and other updates</p>
                    <form className='my-5'>
                        <input type="email" className='rounded-full w-5/6 bg-gray-300 border px-4 py-1' placeholder='Email Adress' />
                        <button type='submit' className='buttons text-xs'> SUSCRIBE</button>
                    </form>
                </div>
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='flex p-5 justify-center'>
                    <div className='w-4/5' >
                        <h1 className='subtitle my-5'>Contact us and place your Order</h1>
                        <p>
                            Reach out to us and we will get back to you ASAP!
                            Also if you dont see what you want on our menu, we can make a custom order,
                            at an agreed cost just for you!
                        </p>
                    </div>
                </div>
                <div>
                    <form className='p-5 shadow-lg message bg-white flex flex-col rounded-xl'>
                        <h1 className='font-bold'>Send a direct message</h1>
                        <input type='text' placeholder="Name" className='message-input'/>
                        <input type='email' placeholder="Email" className='message-input'/>
                        <textarea placeholder="Your message" className='message-text mb-5 h-28'/>
                        <button type="submit" className='buttons w-2/5 mt-5 text-xs'>send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
