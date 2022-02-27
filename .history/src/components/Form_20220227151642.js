import React from 'react'

const Form = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="row">
                <div className="col-lg-7 offset-lg-2 g-0 mx-auto">
                    <div className="fill-form form-box">
                        <div className="row g-0">
                            <div className="col-xl-6 col-lg-12 d-md-none d-sm-none d-xs-none d-lg-block form-box__img">
                        </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 form-box__content">
                            <div id="box-title">
                                <p className="main-form-text">Daily Stats</p>
                            </div>
                            <form>
                                <div class="row">
                                    <div class="col">
                                    Column
                                    </div>
                                    <div class="col">
                                    Column
                                    </div>
                                </div>
                                <div className="mt-3">
                                <p>Date</p>
                                <input
                                    class="form-control"
                                id="date"
                                    name="date"
                                    placeholder="Date"
                                    type="date"
                                />
                                </div>
                                <div className="mt-3">
                                <p>Time</p>
                                <input
                                    class="form-control"
                                id="time"
                                    name="time"
                                    placeholder="Time"
                                    type="time"
                                />
                                </div>
                                <div className="mt-3">
                                <input
                                    className="form-control"
                                    id="pulse-rate"
                                    name="pulse-rate"
                                placeholder="Pulse rate"
                                    type="number"
                                />
                                </div>
                                <div className="mt-3">
                                    <input
                                        class="form-control"
                                    id="systolic-number"
                                        name="systolic-number"
                                        placeholder="Blood pressure - Systolic"
                                        type="number"
                                    />
                                </div>
                                <div className="mt-3">
                                    <input
                                        className="form-control"
                                        id="diastolic-number"
                                        name="diastolic-number"
                                    placeholder="Blood pressure - Diastolic"
                                        type="number"
                                    />
                                </div>
                                <div className="mt-3">
                                    <input
                                        class="form-control"
                                    id="bloodSugar-level"
                                        name="bloodSugar-level"
                                        placeholder="Blood sugar level"
                                        type="number"
                                    />
                                </div>
                                <div className="d-grid mt-4">
                                <button class="btn btn-primary btn-lg" type="submit" value="Send Now">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    fill="currentColor"
                                    class="bi bi-mailbox2"
                                    viewBox="0 0 16 16"
                                    >
                                    </svg>{" "}
                                    Save
                                </button>
                                <button class="btn btn-primary btn-lg" type="submit" value="Send Now">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    fill="currentColor"
                                    class="bi bi-mailbox2"
                                    viewBox="0 0 16 16"
                                    >
                                    </svg>{" "}
                                    View
                                </button>
                                </div>
                            </form>
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