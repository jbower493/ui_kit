import React from 'react'

import Anchor, { AnchorProps } from './Anchor'

export default {
    title: 'Example/Anchor',
    component: Anchor
}

const Template = (args: AnchorProps) => <Anchor {...args}>The anchor</Anchor>

export const Primary = Template.bind({})

Primary.args = {
    href: '/mate'
}
