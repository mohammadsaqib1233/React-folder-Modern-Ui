import React from 'react'
import Navber from './Navber'
import Page01Content from './Page01Content'


const section01 = (props) => {
  console.log(props.user);
  
  return (
    <div className='w-full h-screen'>
      <Navber />
      <Page01Content user={props.user} />
    </div>
  )
}

export default section01
