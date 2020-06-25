import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Join.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Join = () => {
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const classes = useStyles();

    const handleClickJoin = (event) => {
        // let history = useHistory()
        // event => (!name || !group) ? alert('select name & group');

        if (!name || !group) {
            alert('select group and name')
            event.preventDefault()
        } else {
            return null
        }
    }

    const handleChangeGroup = (event) => {
        setGroup(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="outSection">
            <div className="inSection">
                <h1>Join</h1>

                <form>
                    {/* <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl> */}

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Group</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={group}
                            onChange={handleChangeGroup}
                            label="Group"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'ranger'}>Ranger Topic</MenuItem>
                            <MenuItem value={'ultraman'}>Ultraman Topic</MenuItem>
                            <MenuItem value={'anime'}>Anime Topic</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={name}
                            onChange={handleChangeName}
                            label="Name"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Bejo</MenuItem>
                            <MenuItem value={2}>Ari</MenuItem>
                            <MenuItem value={3}>Dinda</MenuItem>
                            <MenuItem value={4}>Putri</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Link
                            onClick={(event) => handleClickJoin(event)}
                            // onClick={event => (!name || !group) ? event.preventDefault() : null}
                            to={`/chat?name=${name}&group=${group}`}
                        >
                            <Button
                                // onClick={() => handleClickJoin()}
                                variant="contained"
                                size="large"
                                color="primary"
                                disableElevation
                            >
                                Join
                            </Button>
                        </Link>
                    </FormControl>

                    {/* <input
                        placeholder="name"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        placeholder="Group"
                        onChange={(event) => setGroup(event.target.value)}
                    />
                    <Link
                        onClick={event => (!name || !group) ? event.preventDefault() : null}
                        to={`/chat?name${name}&group=${group}`}
                    >
                        <button>Join</button>
                    </Link> */}
                </form>
            </div >
        </div >
    )
}

export default Join;