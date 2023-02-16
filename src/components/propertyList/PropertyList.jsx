import React from 'react'
import useFetch from '../../hooks/useFetch'
import './propertyList.css'

function PropertyList() {

    const {data,loading,fetch}=useFetch(
        "/hotels/countByType"
    );

    const images=[
        "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  return (
  
<div className="pList">
    {loading ?("loading ") : (
    <>

    {data && images.map((img,i)=>(

   
    <div className="pListItem">
        <img src={img} alt=""
            className='pListImg' />
        <div className="pListTitles">
            <h1>{data[i].type}</h1>
            <h2>{data[i].count} {data[i].type}</h2>
        </div>
    </div>
     ))}
    
    </>
    )}
</div>

  )
}

export default PropertyList