import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Registration } from "./Registration";

import "../../../assets/fonts/font.css";

const meta = {
  title: "Shared/UI/Registration",
  component: Registration,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphonex",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Registration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};