import React from 'react'
import { Link } from 'react-router-dom'
import "./More.css"

const More = () => {
    return (
        <div className="Leave">
            <div className="Leave-main">
                <div className="more-box">
                    <div className="more-card">
                        <h4>Account</h4>
                        <ul>
                            <li><Link>Profile</Link></li>
                            <li><Link>Change Password</Link></li>
                        </ul>
                        <h4>Office Desks</h4>
                        <ul>
                            <li><Link>Team Sheet</Link></li>
                            <li><Link>Project Management</Link></li>
                            <li><Link>Holiday</Link></li>
                            <li><Link>Notices</Link></li>
                            <li><Link>Meeting</Link></li>
                            <li><Link>Leave Calender</Link></li>
                        </ul>
                        <h4>Fainance</h4>
                        <ul>
                            <li><Link>Team Sheet</Link></li>
                            <li><Link>Project Management</Link></li>
                            <li><Link>Holiday</Link></li>
                            <li><Link>Notices</Link></li>
                            <li><Link>Meeting</Link></li>
                            <li><Link>Leave Calender</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default More
