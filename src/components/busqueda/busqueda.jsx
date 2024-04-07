import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { Search as SearchIcon } from "@mui/icons-material"
import { useState } from 'react'

const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))
// eslint-disable-next-line react/prop-types
const GenericSearchBar = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState(value)

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onChange(inputValue)
        }
    }

    return (
        <SearchContainer style={{ color: "black", backgroundColor: "white", width: "100%", border: "1px solid black", marginBottom: "1rem", boxSizing: "border-box" }}>
            <SearchIconWrapper>
                    <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </SearchContainer>
    )
}

export default GenericSearchBar