import React, { useState } from 'react';

import { TbBrandBooking } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <ul className='nav-left'>
                            <h1 className="logo">My Website</h1>
                            <li><a href="#flight">Flight</a></li>
                            <li><a href="#hotels">Hotels</a></li>
                            <li><a href="#rentalCars">Rental Cars</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className='nav-right' >
                            <li><button className='support-btn' onClick={(e) => setIsDropdownOpen(!isDropdownOpen)}><span className='book'><MdContactSupport className='header-icon r-sup' /><span className="header-text">Support</span></span></button>
                                {isDropdownOpen && (
                                    <ul className="dropdown" onClick={(e) => e.stopPropagation()}>
                                        <li><a href="#contact">Contact us</a></li>
                                        <li><a href="#faq">FAQ</a></li>
                                        <li><a href="#airlineInformation">Airline Information</a></li>
                                        <li><a href="#myBookings">My Bookings</a></li>
                                    </ul>
                                )}
                            </li>
                            <li><a href="#myBooking"><span className='book'><TbBrandBooking className='header-icon' /><span className='header-text'>My Booking</span></span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Header
