import React, { ReactNode } from 'react'

export interface AnchorProps {
    children: ReactNode
    href: string
    target: string
}

function Anchor({ children, href, target }: AnchorProps) {
    return (
        <a href={href} target={target}>
            {children}
        </a>
    )
}

export default Anchor
