import { ComponentStory, ComponentMeta } from "@storybook/react";

import RightSideBar from "./RightSideBar";

export default {
    title: "Components/RightSideBar",
    component: RightSideBar,
} as ComponentMeta<typeof RightSideBar>;

const Template: ComponentStory<typeof RightSideBar> = () => <RightSideBar />;

export const Default = Template.bind({});
