import React from 'react'

const RightCardContent = (props) => {
    return (
        <div>
            <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full flex h-10 w-10 text-3xl flex-col items-center justify-between font-semibold'>{props.id}</h2>
                <div>
                    <p className='text-lg text-white leading-normal mb-5'>{props.intro}</p>
                    <div className='flex justify-between'>
                        <button style={{ background: props.color }} className='text-white font-semibold px-15 py-2 rounded-full text-lg'>{props.tag}</button>
                        <button style={{ background: props.color }} className='text-white font-semibold px-3 py-2 rounded-full text-lg'><i className='ri-arrow-right-line'></i></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightCardContent
