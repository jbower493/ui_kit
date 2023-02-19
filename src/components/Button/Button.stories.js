import React from 'react'

import Button from './Button'

export default {
    title: 'Example/Button',
    component: Button
}

const Template = (args) => <Button {...args}>Mate</Button>

export const Primary = Template.bind({})

Primary.args = {
    onClick: () => alert('Clicked')
}
