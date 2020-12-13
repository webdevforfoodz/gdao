import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import styled from 'styled-components';

function DropDownMenu(props) {

    const [visibility,setVisibility] = useState(false)

    const hide = {
        "display" : "none",
    }
    const show = {
        "display": "block"
    }

    const Menu = () => {
        setVisibility(!visibility)
    }

    return (
        <Div onMouseEnter={Menu} onMouseLeave={Menu}>
            <Container >
                <span >{props.title} </span>
                {props.item1 && <AiFillCaretDown style={{marginLeft: `7px`, marginTop: `5px`}} />}
            </Container>
            <List style={visibility ? show : hide} >
                {props.item1 && <Item>{props.item1}</Item>}
                {props.item2 && <Item>{props.item2}</Item>}
                {props.item3 && <Item>{props.item3}</Item>}
                {props.item4 && <Item >{props.item4}</Item>}
            </List>
        </Div>
    )
}

export default DropDownMenu;

const Div = styled.div`
    font-size: 20px;

    @media only screen and (max-width:1150px) {
        &:hover {
            background: rgb(230,230,230);
        }
    }
`

const Container = styled.div`
display: flex;
align-items: center;
letter-spacing: 1px;
position: relative;
z-index: 1000;
cursor: pointer;

@media only screen and (max-width:1150px) {
    padding: 1em 2em;
    border-bottom: 1px solid #dfdfdf;

    span {
        font-weight:bold;
    }

    &:hover {
        background: rgb(230,230,230);
    }
}
`

const List = styled.ul`
    position: absolute;
    color: #121212;
    line-height: 30px;
    background: white;
    width: 150px;
    border-radius: 0 0 10px 10px;
    padding: 0;
    text-align:center;
    overflow: hidden;

@media only screen and (max-width:1150px) { 
    position:relative;
    background:transparent;
    text-align:start;
    padding: 0 2em;
}
`
const Item = styled.li`
transition: all 0.3s ease-in-out;
width:100%;
list-style: none;
position:relative;
z-index:10;
cursor:pointer;
padding:10px 0px;
border-bottom: 1px solid rgb(230,230,230);
backround: white;

&:hover {
    background: lightgrey;
}

@media only screen and (max-width:1150px) {
    border-bottom: 0px solid rgb(230,230,230);
    background: transparent;
    font-size:17px;
    display:block;
    width:100vw;

    &:hover {
        background: rgb(230,230,230);
    }
}
`