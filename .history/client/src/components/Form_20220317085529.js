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
                                <div className="tab">
                                    <button className="tablinks">Blood Pressure</button>
                                    <button className="tablinks">Blood Sugar</button>
                                    <button className="tablinks">View Stats</button>
                                </div>
                                
                                
                                <h4>Blood Sugar</h4>
                                <form>
                                    <div class="row row-cols-2">
                                    <div className=" col-6 mt-3">
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
                                        <select id="simple" name="simple">
                                            <option selected>Random</option>
                                            <option>Fasted</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <button class="btn btn-primary btn-lg" type="submit" value="save">
                                                    Save
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