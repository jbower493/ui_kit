import React from 'react'

import StyledButton from './Button.styled'

export default {
    title: 'Example/StyledButton',
    component: StyledButton
}

const Template = (args) => <StyledButton {...args}>Mate</StyledButton>

export const Primary = Template.bind({})

Primary.args = {
    onClick: () => alert('Clicked')
}
