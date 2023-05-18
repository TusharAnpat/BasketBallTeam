import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function FirstQuater(props) {
    return (
        <div>
            <ul>
                {props.formArray.map((ele, index) => {
                    // return (< li key={index}>{ele.FirstName}</li>)
                    return (
                        

                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                            {/* <InputLabel id="demo-simple-select-standard-label">Position</InputLabel> */}
                            <Select
                                // labelId="demo-simple-select-standard-label"
                                // id="demo-simple-select-standard"
                                // value={Position}
                                // onChange={setPositionHandler}
                                label="Position"
                                required
                            >
                                {
                                    props.formArray.map((ele,index)=>{
                                        // <div key={index}>

                                           return( <MenuItem value={ele.FirstName}>{ele.FirstName}</MenuItem>);
                                        // </div>
                                    })
                                }
                            </Select>
                        </FormControl>
                    )

                })}
            </ul>
        </div >
    )
}

export default FirstQuater
