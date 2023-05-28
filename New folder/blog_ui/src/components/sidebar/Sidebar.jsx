import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>You got some news?</span>
            <img
                src="https://images.pexels.com/photos/9072329/pexels-photo-9072329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=''
            />
            <p>We are happy to promote relevant accessibility related news stories to our GAMING community. If you have a story we should be aware of please let us know using the form below.</p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>SUGGEST NEWS</span>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Full Name</label>
                    <input
                        name="fullName"
                        type="text"
                        placeholder="full name"
                        
                    />
                </div>
                <div className="addProductItem">
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email..."
                        
                    />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input
                        type="text"
                        name='title'
                        placeholder='title'
                    />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    {/* <input
                        name="desc"
                        type="text"
                        placeholder="description..."
                        
                    /> */}
                    <textarea rows="12" cols="30" placeholder='enter your news here...' />
                </div>
                <div className="addProductItem">
                    <label>Image</label>
                    <input
                        type="file"
                        id="file"
                        
                    />
                </div>
                <button  className="addProductButton">
                    Send
                </button>
            </form>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar