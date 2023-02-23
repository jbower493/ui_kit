import React from 'react'
import ButtonController, { ButtonBaseProps } from './Button.controller'

function StyledButtonComponent(props: ButtonBaseProps) {
    return <ButtonController Button={{ Base: (props) => <button {...props} /> }} {...props} />
}

export default StyledButtonComponent
