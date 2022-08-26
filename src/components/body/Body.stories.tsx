import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Body from "./Body";

export default {
    title: "Components/Body",
    component: Body,
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Default = Template.bind({});

export const Paragraph = Template.bind({});
Paragraph.args = {
    children: "children",
};
