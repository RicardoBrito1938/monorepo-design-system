import type { Meta, StoryObj } from "@storybook/react";
import * as Button from "@sf-digital-ui/react/src/components/Button";
import { ArrowRight } from "phosphor-react";
import "@sf-digital-ui/react/dist/output.css";

export default {
  title: "Form/Button",
  component: Button.Root,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "outline", "ghost"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    action: "click",
  },
} as Meta<typeof Button.Root>;

export const Primary: StoryObj<typeof Button.Root> = {};

export const Outline: StoryObj<typeof Button.Root> = {
  args: {
    variant: "outline",
    children: "Create new",
  },
};

export const Ghost: StoryObj<typeof Button.Root> = {
  args: {
    variant: "ghost",
    children: "Cancel",
  },
};

export const WithIcon: StoryObj<typeof Button.Root> = {
  args: {
    children: (
      <Button.Prefix>
        <ArrowRight weight="bold" /> Next Step
      </Button.Prefix>
    ),
  },
};

export const Disabled: StoryObj<typeof Button.Root> = {
  args: {
    disabled: true,
  },
};
