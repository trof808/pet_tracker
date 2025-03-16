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
    size: "medium",
    cardTitle: 'Тех встреча. Обсуждаем форму поиска',
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

export const Small: Story = {
  args: {
    id: "1",
    status: "backlog",
    size: "small",
    cardTitle: 'Тех встреча. Обсуждаем форму поиска',
    tag: {
      title: "Менторство",
      color: "#73AFBC",
    },
    startDateTime: "2025-03-07T11:30:00Z",
    endDateTime: "2025-03-07T12:30:00Z",
    onClick: () => null,
    onDelete: () => null,
    onDone: () => null,
  },
};

export const Large: Story = {
  args: {
    ...Small.args,
    size: "large",
  },
};

export const StatusDone: Story = {
  args: {
    ...Primary.args,
    status: "done",
    tag: {
      title: "Менторство",
      color: "#73AFBC",
    },
    startDateTime: "2025-03-07T19:30:00Z",
    endDateTime: "2025-03-07T20:30:00Z",
  },
};

export const StatusCanceled: Story = {
  args: {
    ...StatusDone.args,
    status: "canceled",
  },
};


export const WithoutTagAndDate: Story = {
  args: {
    ...Small.args,
    tag: {
      title: "",
      color: "#73AFBC",
    },
    startDateTime: "",
    endDateTime: "",
  }
}

export const WithoutTag: Story = {
  args: {
    ...Small.args,
    tag: {
      title: "",
      color: '',
    },
    startDateTime: "2025-03-07T19:30:00Z",
    endDateTime: "2025-03-07T20:30:00Z",
  }
}