import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "radio", options: ["xs", "sm", "md", "lg"] },
      defaultValue: "md",
    },
    variant: {
      control: {
        type: "radio",
        options: ["solid", "outline", "ghost", "link"],
      },
      defaultValue: "solid",
    },
    colorScheme: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "gray",
          "red",
          "orange",
          "whiteAlpha",
          "blackAlpha",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink",
        ],
      },
      defaultValue: "solid",
    },
  },
  args: {
    label: "Click me",
    fluid: false,
    isLoading: false,
    isDisabled: false,
    colorScheme: "primary",
  },
  parameters: {
    controls: {
      include: [
        "label",
        "size",
        "variant",
        "isLoading",
        "isDisabled",
        "colorScheme",
      ],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
