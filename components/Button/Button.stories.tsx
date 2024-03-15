import { Meta, StoryObj } from "@storybook/react";
import { FaPlus } from "react-icons/fa";
import Button from ".";

type Story = StoryObj<typeof Button>;

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
} as Meta<typeof Button>;

export const Preview: Story = {};

export const StartIcon: Story = {
  args: {
    startIcon: <FaPlus />,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
