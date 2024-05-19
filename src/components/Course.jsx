import React from 'react'
import  list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-4xl ">We are delighted to have you <span className="text-pink-500"> Here! :)</span></h1>
        <p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, temporibus, qui unde dignissimos ad aut error consectetur facere sed explicabo, totam dolor! Odit iusto autem ea quae minus quod. Eveniet magnam, harum distinctio cum fuga illo nostrum assumenda asperiores id totam culpa dolores! Ratione, repellat quas sapiente mollitia totam sunt.</p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-300 mt-6'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1'>
        {
          list.map((item)=>(
           <Cards key={item.id} item={item} />
          )
          )
        }
      </div>
    </div>
    
    </>
  )
}

export default Course