import React, { FC, ReactNode } from 'react'

export interface ButtonBaseProps {
    children: ReactNode
    onClick: () => void
}

interface ButtonControllerProps extends ButtonBaseProps {
    Button: {
        Base: FC<ButtonBaseProps>
    }
}

function ButtonController({ Button, children, onClick }: ButtonControllerProps) {
    return <Button.Base onClick={onClick}>{children}</Button.Base>
}

export default ButtonController
