import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function FirstQuater(props) {
    return (
        <>
        <div style={{
            display: 'grid',
            margin: '10px',
            padding: '14px',
            width: 500,
            height: '400px',
            border: '1px solid #C7BEBC'
        }}>
            <div style={{marginRight: '25px',}} >
                {/* {props.formArray.map((ele, index) => { */}
                    {/* // return (< li key={index}>{ele.FirstName}</li>) */}
                    {/* return ( */}
                        

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

                                           return( <MenuItem key={index} value={ele.FirstName}>{ele.FirstName}</MenuItem>
                                           );
                                        // </div>
                                    })
                                }
                            </Select>
                        </FormControl>
                    {/* ) */}

                {/* })} */}
            
                {/* {props.formArray.map((ele, index) => { */}
                    {/* // return (< li key={index}>{ele.FirstName}</li>) */}
                    {/* return ( */}
                        

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

                                           return( <MenuItem key={index} value={ele.Position}>{ele.Position}</MenuItem>);
                                        // </div>
                                    })
                                }
                            </Select>
                        </FormControl>
                    {/* ) */}

                {/* })} */}
            </div>
        </div >
        </>


    )
}

export default FirstQuater
