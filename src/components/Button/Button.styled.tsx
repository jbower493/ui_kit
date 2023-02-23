import React, { cloneElement } from 'react'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme'
import ButtonController, { ButtonBaseProps } from './Button.controller'

export interface StyledButtonComponentProps extends ButtonBaseProps {
    color: 'primary' | 'secondary' | 'error'
}

const StyledButton = styled.button<StyledButtonComponentProps>`
    background-color: ${({ theme, color }) => theme.colors[color]};
    color: white;
    padding: 7px 15px;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
`

StyledButton.defaultProps = {
    theme: defaultTheme
}

function StyledButtonComponent({ color, onClick, children }: StyledButtonComponentProps) {
    return <ButtonController Button={{ Base: (baseProps) => <StyledButton {...baseProps} color={color} /> }} onClick={onClick} children={children} />
}

export default StyledButtonComponent
