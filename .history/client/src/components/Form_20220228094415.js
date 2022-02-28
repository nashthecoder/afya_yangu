import React from 'react'

const Form = () => {
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
                                <input className="col-6 mt-3" type="date" id="date" name="date" />
                                <label for="test">Select a time:</label>
                                <input className="col-6 mt-3" type="time" id="test" name="test"></input>
                            </div>
                            <form>
                                <div className="mt-3">
                                <label for="pulse-rate">Pulse rate:</label>
                                <input
                                    className="form-control"
                                    id="pulse-rate"
                                    name="pulse-rate"
                                    placeholder='000'
                                    type="number"
                                />
                                </div>
                                <div className="mt-3">
                                    <label for="systolic-number">Systolic rate</label>
                                    <input
                                        class="form-control"
                                        id="systolic-number"
                                        name="systolic-number"
                                        placeholder='000'
                                        type="number"
                                    />
                                </div>
                                <div className="mt-3">
                                    <label for="diastolic-number">Diastolic rate:</label>
                                    <input
                                        className="form-control"
                                        id="diastolic-number"
                                        name="diastolic-number"
                                        placeholder='000'
                                        type="number"
                                    />
                                </div>
                                <div className="mt-3">
                                    <label for="bloodSugar-level">Blood sugar level:</label>
                                    <input
                                        class="form-control"
                                        id="bloodSugar-level"
                                        name="bloodSugar-level"
                                        type="number"
                                        step='0.1'
                                        placeholder='0.0'
                                    />
                                </div>
                                <div className="mt-3">
                                    <p>Select the test type</p>
                                    <div><input type=/></div>
                                    <div><input /></div>
                                </div>
                                <div className="d-grid mt-4">
                                <div class="container">
                                    <div class="row row-cols-2">
                                        <div class="col">
                                            <button class="btn btn-primary btn-lg" type="submit" value="save">
                                                Save
                                            </button>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-primary btn-lg" type="submit" value="view">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </form>
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