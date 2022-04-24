import React from 'react'
import Form from './Form'

const Header = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="row">
                <div className="col-lg-7 offset-lg-2 g-0 mx-auto">
                    <div className="fill-form form-box">
                            <div className="form-box__content">
                            <div id="box-title">
                                <p className="main-form-text">Daily Stats</p>
                            </div>
                            <div className="top-container row-cols-2">
                                <label for="date">Date:</label>
                                <input className="col-3 mt-3" type="date" id="date" name="date" />
                            <label for="test">Select a time:</label>
                                    <select className="col-3 mt-3 p-2"type="time" id="test" name="test">
                                        <option selected>Morning</option>
                                        <option>Evening</option>
                                    </select>
                                </div>
                                <div>
                                    
                                </div>
                                < Form />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        </>
    )
}

export default Header