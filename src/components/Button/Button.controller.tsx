import React from 'react'

function ButtonController({ Button, children, onClick }) {
    return <Button.Base onClick={onClick}>{children}</Button.Base>
}

export default ButtonController
