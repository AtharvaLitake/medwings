import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import medicine from '../../Images/Medicines.png'
import hygiene from '../../Images/Hygiene.png'
import equipments from '../../Images/Equipments.png'
import face from '../../Images/Face.png'
import '../Category/Category.css'
const Category = () => {
  return (
    <div className='category my-10'>
      <div className="type1">
        < >
        <button>
            <img src={medicine} alt="" />
        </button>
        </>
        <h3>Medicines</h3>
      </div>
      <div className="type1">
      <  >
      <button>
            <img src={hygiene} alt="" />
        </button>
        </>
        <h3>Hygiene</h3>
      </div>
      <div className="type1">
      <  >
      <button>
            <img src={equipments} alt="" />
        </button>
        </>
        <h3>Equipments</h3>
      </div>
      <div className="type1">
      <  >
      <button>
            <img src={face} alt="" />
        </button>
        </>
        <h3>Face & Hair</h3>
      </div>
    </div>
  )
}

export default Category