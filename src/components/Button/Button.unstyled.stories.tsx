import React from 'react'

import UnstyledButton from './Button.unstyled'

export default {
    title: 'Example/UnstyledButton',
    component: UnstyledButton
}

const Template = (args) => <UnstyledButton {...args}>Mate</UnstyledButton>

export const Primary = Template.bind({})

Primary.args = {
    onClick: () => alert('Clicked')
}
