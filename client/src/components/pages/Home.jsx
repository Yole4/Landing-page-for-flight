import React from 'react';

// react icons
import { GoArrowSwitch } from "react-icons/go";


function Home() {
    return (
        <div>
            <body>
                <div className="body-container">
                    <div style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                        <div>
                            <input type="radio" checked />
                            <label >Return</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >One-Way</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >Multi-City</label>
                        </div>
                    </div>


                    <div style={{display: 'flex', gap: '10px', alignItems: 'end'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="">From</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""><GoArrowSwitch /></label>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="">To</label>
                            <input type="text" />
                        </div>
                        <div>
                            <button>Search Flight</button>
                        </div>
                    </div>

                    <div style={{display: 'flex', gap: '10px', alignItems: 'end'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="">Departure</label>
                            <input type="date" />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="">Return</label>
                            <input type="date" />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="">Passengers</label>
                            <select name="" id="">
                                <option value="Select">Select</option>
                            </select>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="">Class</label>
                            <select name="" id="">
                                <option value="Select">Select</option>
                            </select>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Nonstop Flights Only</label>
                        </div>  
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Home
