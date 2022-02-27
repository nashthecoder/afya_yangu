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
                            <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
                            <form>
                            
                                <div class="row mt-6">
                                    <div class="col">
                                        <p>Date</p>
                                        <input
                                            class="form-control"
                                            id="date"
                                            name="date"
                                            placeholder="Date"
                                            type="date"
                                        />
                                    </div>
                                    <div class="col">
                                        <p>Time</p>
                                    </div>
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
        </section>
        </>
    )
}

export default Form