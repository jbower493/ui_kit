import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: blue;
    color: white;
`

function Button({ children, onClick }) {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
