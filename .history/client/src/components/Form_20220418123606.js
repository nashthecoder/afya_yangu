import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box'


function TabPanel(props) {
    const { children, value, index , ...other } = props;

    return (
        <div 
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Blood Pressure" {...a11yProps(0)} />
                <Tab label="Blood Sugar" {...a11yProps(1)} />
                <Tab label="View Stats" {...a11yProps(2)} />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            
            <form>
                 <div class="row row-cols-3">
                     <div className="col-3 mt-3">
                         <label for="systolic-number">Systolic rate</label>
                             <input
                                 class="form-control"
                                 id="systolic-number"
                                 name="systolic-number"
                                 placeholder='000'
                                 type="number"/>
                                 </div>
                     <div className="col-3 mt-3">
                         <label for="diastolic-number">Diastolic rate:</label>
                             <input
                                 className="form-control"
                                 id="diastolic-number"
                                 name="diastolic-number"
                                 placeholder='000'
                                 type="number"/>
                     </div>
                    <div className="col-3 mt-3">
                        <label for="pulse-rate">Pulse rate:</label>
                            <input
                                 className="form-control"
                                 id="pulse-rate"
                                 name="pulse-rate"
                                 placeholder='000'
                                type="number"/>
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
            </TabPanel>
            <TabPanel value={value} index={1}>
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
                                placeholder='0.0'/>
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
            </TabPanel>
            <TabPanel value={value} index={2}>
            Item Three
            </TabPanel>
        </Box>
    );
}
