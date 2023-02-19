import React from 'react'

function Anchor({ children, href }) {
    return <a href={href}>{children}</a>
}

export default Anchor
