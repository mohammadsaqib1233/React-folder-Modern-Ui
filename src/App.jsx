import React from 'react'
import Navber from './Components/Section01/Navber'
import Section01 from './Components/Section01/Section01'

const App = () => {
  const user = [
    {
      image: "https://images.unsplash.com/photo-1589785157215-127232cf9dca?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque eius quisquam repellat quod quidem.",
      tag: "Satisfied",
      color: "blue"

    },
    {
      image: "https://images.unsplash.com/photo-1684065155818-94c4df059df5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque eius quisquam repellat quod quidem.",
      tag: "Undersave",
      color: "green"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661293869113-4e4e5735b62d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque eius quisquam repellat quod quidem.",
      tag: "Underbank",
      color: "orange"
    },
    {
      image: "https://images.unsplash.com/photo-1658212516980-1240051471c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque eius quisquam repellat quod quidem.",
      tag: "Undersave",
      color: "cyan"
    },
    {
      image: "https://images.unsplash.com/photo-1656308859253-634095bc987b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque eius quisquam repellat quod quidem.",
      tag: "Underbank",
      color: "blue"
    }

  ]

  return (
    <div>

      <Section01 user={user} />
    </div>

  )
}

export default App
