import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import medicine from '../../Images/Medicines.png'
import hygiene from '../../Images/Hygiene.png'
import equipments from '../../Images/Equipments.png'
import face from '../../Images/Face.png'
import { Link } from 'react-router-dom'
import '../Category/Category.css'
const Category = () => {
  return (
    <div className='category my-10'>
      <div className="type1">
        < >
        <Link to='/med'>
        <button>
            <img src={medicine} alt="" />
        </button>
        </Link>
        </>
        <h3>Medicines</h3>
      </div>
      <div className="type1">
      <  >
      <Link to='/eqp'>
        <button>
            <img src={equipments} alt="" />
        </button>
        </Link>
        </>
        <h3>Equipments</h3>
      </div>
      <div className="type1">
      <  >
      <Link to='/hyg'>
        <button>
            <img src={hygiene} alt="" />
        </button>
        </Link>
        </>
        <h3>Hygiene</h3>
      </div>
      <div className="type1">
      <  >
      <Link to='/face'>
        <button>
            <img src={face} alt="" />
        </button>
        </Link>
        </>
        <h3>Face & Hair</h3>
      </div>
    </div>
  )
}

export default Category