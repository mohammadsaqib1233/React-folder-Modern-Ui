import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page01Content = (props) => {
    return (
        <div className='py-3 px-6 h-[95vh] flex justify-between items-center gap-3 '>
            <LeftContent /> 
            <RightContent user={props.user} />
        </div>
    )
}

export default Page01Content
