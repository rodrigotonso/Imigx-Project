import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImgCard from "./ImgCard";

export default {
    title: "Components/ImgCard",
    component: ImgCard,
} as ComponentMeta<typeof ImgCard>;

const Template: ComponentStory<typeof ImgCard> = (args) => (
    <ImgCard {...args} />
);

export const Default = Template.bind({});

export const withImage = Template.bind({});
withImage.args = {
    url: "https://assets.imgix.net/unsplash/alarmclock.jpg",
    style: { height: 300 },
};
