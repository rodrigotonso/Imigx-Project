import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImgList from "./ImgList";
import imageArray from "../../../server/imgix-samples-list.json"
export default {
    title: "Components/ImgList",
    component: ImgList,
} as ComponentMeta<typeof ImgList>;

const Template: ComponentStory<typeof ImgList> = (args) => (
    <ImgList {...args} />
);

export const Default = Template.bind({});

export const withImage = Template.bind({});
withImage.args = {
    images: [{url: "https://assets.imgix.net/unsplash/alarmclock.jpg"},{url: "https://assets.imgix.net/unsplash/alarmclock.jpg"}]
}

export const arrayImage = Template.bind({});
arrayImage.args = {
    images: [...imageArray]
}
