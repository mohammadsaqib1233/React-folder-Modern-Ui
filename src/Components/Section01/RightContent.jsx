import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div id='right' className='h-full overflow-x-scroll flex gap-5 flex-nowrap p-5 w-2/3'>
            {
                props.user.map(function (elem , indx) {
                    return <RightCard key={indx} id={indx} image={elem.image} tag={elem.tag} intro={elem.intro} color={elem.color} />

                })
            }
        </div>
    )
}

export default RightContent
