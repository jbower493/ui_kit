import React from 'react'

import StyledButton from './Button.styled'

export default {
    title: 'Example/StyledButton',
    component: StyledButton
}

const Template = (args) => <StyledButton {...args}>Mate</StyledButton>

export const Primary = Template.bind({})
Primary.args = {
    onClick: () => alert('Clicked'),
    color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    onClick: () => alert('Clicked'),
    color: 'secondary',
    mate: ''
}

export const Error = Template.bind({})
Error.args = {
    onClick: () => alert('Clicked'),
    color: 'error'
}
