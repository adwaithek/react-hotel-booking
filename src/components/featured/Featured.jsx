import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'


function Featured() {


    const { data, loading, error} =useFetch("/hotels/countByCity?cities=berlin,madrid,london")


    console.log(data);
    return (
    <div className="featured">
   {loading ? ( "Loading please wait") : (
      
               <>
            <div className="featuredItem">
                <img className='featuredImg' src="https://images.pexels.com/photos/1650919/pexels-photo-1650919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                <div className="featuredTitles">

                    <h1>Berlin</h1>
                    <h2>{data[0]} Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://images.pexels.com/photos/5281394/pexels-photo-5281394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                <div className="featuredTitles">

                    <h1>Madrid</h1>
                    <h2>{data[1]} Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://images.pexels.com/photos/7877261/pexels-photo-7877261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                <div className="featuredTitles">

                    <h1 >London</h1>
                    
                    <h2 className='prope'>{data[2]} Properties</h2>
                </div>
            </div>
            
            </>
    
)}
            
        </div>

    );
}

export default Featured