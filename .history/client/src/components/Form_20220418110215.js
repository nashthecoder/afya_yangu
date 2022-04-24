import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box'


const Form = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="row">
                <div className="col-lg-7 offset-lg-2 g-0 mx-auto ">
                    <div className="fill-form form-box">
                            <div className="form-box__content">
                                <div className="tab">
                                    <button className="tabLinks active">Blood Pressure</button>
                                    <button className="tabLinks">Blood Sugar</button>
                                    <button className="tabLinks">View Stats</button>
                                </div>
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
