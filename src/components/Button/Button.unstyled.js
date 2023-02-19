import React from 'react'
import ButtonController from './Button.controller'

function StyledButtonComponent(props) {
    return <ButtonController Button={{ Base: (props) => <button {...props} /> }} {...props} />
}

export default StyledButtonComponent
