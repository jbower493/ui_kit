import React from 'react'
import styled from 'styled-components'
import ButtonController from './Button.controller'

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    padding: 7px 15px;
    border: 0;
    border-radius: 5px;
`

function StyledButtonComponent(props) {
    return <ButtonController Button={{ Base: StyledButton }} {...props} />
}

export default StyledButtonComponent
