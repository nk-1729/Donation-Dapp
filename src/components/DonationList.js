import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const DonationList = ({ donationsreq }) => {
    return (
        <div className='dlist' >
            <ul>
                {
                    donationsreq.map((drequest) =>
                        <li key={drequest.id} >
                            <p>Id :{drequest.id}</p>
                            <p>{drequest.name}</p>
                            <p>
                                {/* <Link to="/userproduct" state={{ data: drequest.id }}>
                                    Details
                                </Link> */}
                                Details
                            </p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default DonationList