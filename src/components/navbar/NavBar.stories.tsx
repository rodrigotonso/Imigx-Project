import { ComponentStory, ComponentMeta } from "@storybook/react";

import NabBar from "./NavBar";

export default {
    title: "Components/NabBar",
    component: NabBar,
} as ComponentMeta<typeof NabBar>;

const Template: ComponentStory<typeof NabBar> = () => <NabBar />;

export const Default = Template.bind({});
