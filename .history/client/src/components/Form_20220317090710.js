import React from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';


const Form = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="row">
                <div className="col-lg-7 offset-lg-2 g-0 mx-auto">
                    <div className="fill-form form-box">
                            <div className="form-box__content">
                                <div className="tab">
                                    <button className="tablinks">Blood Pressure</button>
                                    <button className="tablinks">Blood Sugar</button>
                                    <button className="tablinks">View Stats</button>
                                </div>
                                < Tab1 />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        </>
    )
}

export default Form