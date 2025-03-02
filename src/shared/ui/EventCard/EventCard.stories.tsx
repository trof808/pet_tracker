import type { Meta, StoryObj } from "@storybook/react";

import { EventCard } from "./EventCard";

const meta = {
  title: "shared/ui/EventCard",
  component: EventCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Отображение компонента
export const Primary: Story = {
  args: {
    id: "1",
    status: "backlog",
    size: "normal",
    tag: {
      title: "Работа",
      color: "red",
    },
    startDateTime: "2025-03-07T14:30:00Z",
    endDateTime: "2025-03-07T15:30:00Z",
    onClick: () => null,
    onDelete: () => null,
    onDone: () => null,
  },
};

// Ниже можно делать другие вариации компонента просто изменив пропсы
// Смотри пример в компонент Button
