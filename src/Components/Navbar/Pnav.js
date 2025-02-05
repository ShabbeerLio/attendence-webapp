import React from 'react'
import "./Pnav.css"
import { Link } from 'react-router-dom'
import { LuHouse, LuClipboardPen, LuAlignRight } from "react-icons/lu";
import { MdOutlineSick } from "react-icons/md";



const Pnav = () => {
    return (
        <div className='Pnav'>
            <ul>
                <li>
                    <Link to={"/"}><LuHouse />Home</Link>
                </li>
                <li>
                    <Link to={"/leave"}><MdOutlineSick />Leave</Link>
                </li>
                <li>
                    <Link to={"/attendence"}> <LuClipboardPen /> Attendence</Link>
                </li>
                <li>
                    <Link to={"/more"}> <LuAlignRight />More</Link>
                </li>
            </ul>
        </div>
    )
}

export default Pnav
