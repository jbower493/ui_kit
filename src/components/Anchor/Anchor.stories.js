import React from 'react'

import Anchor from './Anchor'

export default {
    title: 'Example/Anchor',
    component: Anchor
}

const Template = (args) => <Anchor {...args}>The anchor</Anchor>

export const Primary = Template.bind({})

Primary.args = {
    href: '/mate'
}
