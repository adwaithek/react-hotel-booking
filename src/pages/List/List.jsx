import React, { useState } from 'react'
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns"
import { DateRange } from 'react-date-range'
import Searchitem from '../../components/searchitem/Searchitem'



function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [opendate, setOpendate] = useState(false)
  const [options, setOptions] = useState(location.state.options)



  return (
    <div>
      <Navbar />

      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label >Check-in Date</label>

              <span onClick={() => setOpendate(!opendate)} >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}  `} </span>
              {opendate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}

              />
              }
            </div>
            <div className="listItem ">
              <label>Options</label>
              <div className="listOptions">

                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>

                <div className="listOptionItem mt-1">
                  <span className="listOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>


                <div className="listOptionItem mt-1">
                  <span className="listOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} className="listOptionInput" placeholder={options.adult} />
                </div>


                <div className="listOptionItem mt-1">
                  <span className="listOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="listOptionInput" placeholder={options.children} />
                </div>


                <div className="listOptionItem mt-1">
                  <span className="listOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="listOptionInput" placeholder={options.room} />
                </div>
              </div>
              <button className='lsSearch-btn'>Search</button>


            </div>


           
          </div>
          <div className="listResult">
              <Searchitem/>
              <Searchitem/>
              <Searchitem/>
              <Searchitem/>
              <Searchitem/>
              <Searchitem/>
              <Searchitem/>
              <Searchitem/>
              <Searchitem/>
              <Searchitem/>
              
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default List