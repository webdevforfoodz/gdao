import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import styled from 'styled-components';

function DropDownMenu(props) {

    const [visibility,setVisibility] = useState(false)

  

    const hide = {
        "display" : "none",
    }
    const show = {
        "textAlign": "center",
        "color": "#121212",
        "lineHeight": "30px",
        "padding": "0 0",
        "position": "absolute"
    }

    const Menu = () => {
        setVisibility(!visibility)
    }

    return (
        <div style={{
            fontSize: '20px',
        }} onMouseEnter={Menu} onMouseLeave={Menu}>
            <Container>
                <span >{props.title} </span>
                {props.item1 && <AiFillCaretDown style={{marginLeft: `7px`, marginTop: `5px`}} />}
            </Container>
            <ul style={visibility ? show : hide} >
                {props.item1 && <Item>{props.item1}</Item>}
                {props.item2 && <Item>{props.item2}</Item>}
                {props.item3 && <Item>{props.item3}</Item>}
                {props.item4 && <Item>{props.item4}</Item>}
            </ul>
        </div>
    )
}

export default DropDownMenu;

const Container = styled.div`
display: flex;
align-items: center;
letter-spacing: 2px;
position: relative;
z-index: 1000;
cursor: pointer;
`
const Item = styled.li`
transition: all 0.3s ease-in-out;
width:100%;
list-style: none;
position:relative;
z-index:10;
cursor:pointer;
padding:10px 20px;
background:white;
border-bottom: 1px solid grey;

&:hover {
    background: #B6B2FF
}
`