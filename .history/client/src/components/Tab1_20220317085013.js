import React from 'react'

const Tab1 = () => {
    return (
        <>
            <form>
            <h4>Blood Pressure</h4>
                <div class="row row-cols-3">
                    <div className="col-3 mt-3">
                        <label for="systolic-number">Systolic rate</label>
                            <input
                                class="form-control"
                                            id="systolic-number"
                                            name="systolic-number"
                                            placeholder='000'
                                            type="number"
                            />
                                </div>
                    <div className="col-3 mt-3">
                            <label for="diastolic-number">Diastolic rate:</label>
                                        <input
                                            className="form-control"
                                            id="diastolic-number"
                                            name="diastolic-number"
                                            placeholder='000'
                                            type="number"
                                        />
                                    </div>
                                    <div className="col-3 mt-3">
                                    <label for="pulse-rate">Pulse rate:</label>
                                    <input
                                        className="form-control"
                                        id="pulse-rate"
                                        name="pulse-rate"
                                        placeholder='000'
                                        type="number"
                                    />
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
        
        </>
    )
}

export default Tab1
