import React from 'react'

function Cards() {
  return (
    <>
    <div className="flex m-10 space-x-32 ">
    <div className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-105 duration-300 dark:border">
  <figure><img src="https://images.unsplash.com/photo-1621827979802-6d778e161b28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D m-20 h-20" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Books!</h2>
    <p>"Discover the Magic Hidden in Every Page"</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-600 btn to-white-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-105 duration-300 dark:border">
  <figure><img src="https://images.unsplash.com/photo-1621827979802-6d778e161b28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D m-20 h-20" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Books!</h2>
    <p>"Discover the Magic Hidden in Every Page"</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-600 btn to-white-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-105 duration-300 dark:border">
  <figure><img src="https://images.unsplash.com/photo-1621827979802-6d778e161b28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D m-20 h-20" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Books!</h2>
    <p>"Discover the Magic Hidden in Every Page"</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-600 btn to-white-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards