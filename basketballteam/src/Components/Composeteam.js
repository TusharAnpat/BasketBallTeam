import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
function Composeteam(props) {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Height, setHeight] = useState('');
    const [Position, setPosition] = useState('');
    const [errorMsg, setErrorMsg] = useState({ FirstName: '', LastName: '', Height: '', Position: '' });

    const setNameHandler = (e) => {
        if (e.target.value.trim().length < 1) {
            setErrorMsg({ ...errorMsg, FirstName: "*Required FirstName" })
        }
        else {
            let FirstName = e.target.value;
            FirstName.replace(/[\sA-Za-z]/g, "") ? setErrorMsg({ ...errorMsg, FirstName: "*Number and Special Char. are not allowed" }) : setErrorMsg({ ...errorMsg, FirstName: "" })
        }
        setFirstName(e.target.value);
    }

    const setLastNameHandler = (e) => {
        if (e.target.value.trim().length < 1) {
            setErrorMsg({ ...errorMsg, LastName: "*Required LastName" })
        }
        else {
            let LastName = e.target.value;
            LastName.replace(/[\sA-Za-z]/g, "") ? setErrorMsg({ ...errorMsg, LastName: "*Number and Special Charactor are not allowed" }) : setErrorMsg({ ...errorMsg, LastName: "" })
        }
        setLastName(e.target.value);
    }

    const setHeightHandler = (e) => {

        if (e.target.value.trim().length < 1) {
            setErrorMsg({ ...errorMsg, Height: "*Required Height" })
        }
        else {
            isNaN(e.target.value) ? setErrorMsg({ ...errorMsg, Height: "*Height must be a Number" }) : setErrorMsg({ ...errorMsg, Height: "" })
        }
        setHeight(e.target.value);
    }

    const setPositionHandler = (e) => {
        if (e.target.value.trim().length < 1) {
            setErrorMsg({ ...errorMsg, Position: "*Required Position" })
        }
        else {
            setErrorMsg({ ...errorMsg, Position: "" })
        }
        setPosition(e.target.value);
    }

    const submit = () => {


        if (FirstName.length === 0 || LastName.length === 0 || Height.length === 0 || Position.length === 0) {
            console.log("In IF block")
            if (FirstName.length === 0 && LastName.length === 0 && Height.length === 0 && Position.length === 0) {
                console.log("In IF block 2")
                setErrorMsg({ FirstName: '*Required FirstName', LastName: '*Required LastName', Height: '*Required Height', Position: '*Required Position' })
            }
            else if (FirstName.length === 0) {
                console.log("In IF block 3")
                setErrorMsg({ ...errorMsg, FirstName: "*Required FirstName" })
            }
            else if (LastName.length === 0) {
                console.log("In IF block 4")
                setErrorMsg({ ...errorMsg, LastName: "*Required LastName" })
            }
            else if (Height.length === 0) {
                console.log("In IF block 5")
                setErrorMsg({ ...errorMsg, Height: "*Required Height" })
            } else if (Position.length === 0) {
                console.log("In IF block 5")
                setErrorMsg({ ...errorMsg, Position: "*Required Position" })
            }
        } else {
            const data = { FirstName, LastName, Height, Position };
            console.log(data);
            props.formUpdate(data); 
            
            setFirstName('');
            setLastName('');
            setHeight('');
            setPosition('');
            setErrorMsg({ FirstName: '', LastName: '', Height: '', Position: '' })
        }
    }

    const resetForm = () => {
        console.log('inside reset')
        setFirstName('');
        setLastName('');
        setHeight('');
        setPosition('');
        setErrorMsg({ FirstName: '', LastName: '', Height: '', Position: '' })
    }

    return (
        <div style={{
            display: 'grid',
            margin: '10px',
            padding: '14px',
            width: 500,
            height: '400px',
            border: '1px solid #C7BEBC'
        }}>
            <div >
                <TextField className='textBox'
                    // error={false}
                    type="text"
                    onChange={setNameHandler}
                    variant="standard"
                    label="First Name"
                    size="small"
                    
                    value={FirstName}
                />
                {errorMsg.FirstName && <span className="error" style={{ color: '#d32f2f' }}>{errorMsg.FirstName}</span>}

            </div>
            <div>
                <TextField className='textBox'
                    // error={!player.lname}
                    type="text"
                    onChange={setLastNameHandler}
                    variant="standard"
                    label="Last Name"
                    size="small"
                    value={LastName}
                    
                />
                {errorMsg.LastName && <span className="error" style={{ color: '#d32f2f' }}>{errorMsg.LastName}</span>}

            </div>
            <div>
                <TextField className='textBox'
                    // error={!player.height}
                    type="text"
                    value={Height}
                    onChange={setHeightHandler}
                    variant="standard"
                    label="Height Name"
                    size="small"
                    
                />
                {errorMsg.Height && <span className="error" style={{ color: '#d32f2f' }}>{errorMsg.Height}</span>}

            </div>
            <div>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Position</InputLabel>
                    <Select
                        // labelId="demo-simple-select-standard-label"
                        // id="demo-simple-select-standard"
                        value={Position}
                        onChange={setPositionHandler}
                        label="Position"
                        
                    >
                        <MenuItem value="Point Guard(PG)">Point Guard(PG)</MenuItem>
                        <MenuItem value="Shooting Guard(SG)">Shooting Guard(SG)</MenuItem>
                        <MenuItem value="Small Forward(SF)">Small Forward(SF)</MenuItem>
                        <MenuItem value="Power Forward(PF)">Power Forward(PF)</MenuItem>
                        <MenuItem value="Center(C)">Center(C)</MenuItem>
                    </Select>
                </FormControl>
                {errorMsg.Position && <span className="error" style={{ color: '#d32f2f' }}>{errorMsg.Position}</span>}

            </div>
            <div>
                <Button sx={{ m: 2 }} variant="contained" size="medium"  onClick={resetForm} >Reset</Button>
                <Button sx={{ m: 2 }} variant="contained" size="medium" onClick={submit}  >Submit</Button>
            </div>
        </div>
    )
}

export default Composeteam
