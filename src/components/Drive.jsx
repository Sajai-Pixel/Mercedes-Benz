import React from 'react'

function Drive() {
    return (
        <div className='drive' id='contact'>
            <h1>Schedule a Test Drive</h1>
            <form className="form">
                <div className="contact">
                    <h2 className='subHead'>Contact Information</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" />
                    <div>
                        
                        <label htmlFor="terms"><input type="checkbox" id="terms" name="terms" />I agree to the terms and conditions</label>
                    </div>
                    <button className='btn' type="submit">Know More</button>
                </div>
            </form>
            <p>Copyright &copy; 2024 Sajai.All rights reserved</p>
        </div>
    )
}

export default Drive
