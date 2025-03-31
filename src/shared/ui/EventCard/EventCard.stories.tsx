import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { EventCard, EventCardStatus } from "./EventCard";

import "../../../assets/fonts/font.css";
import { getCardHeight } from "../../utils/cardHeight";

const meta = {
  title: "Shared/UI/EventCard",
  component: EventCard,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphonex",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая карточка (Backlog)
export const Primary: Story = {
  args: {
    id: "1",
    status: EventCardStatus.Backlog,
    cardTitle: "Тех встреча. Обсуждаем форму поиска",
    tag: {
      title: "Работа",
      color: "red",
    },
    startDateTime: "2025-03-07T14:30:00Z",
    endDateTime: "2025-03-07T15:30:00Z",
    height: getCardHeight("2025-03-07T14:30:00Z", "2025-03-07T15:30:00Z"),
    onClick: (id: string) => console.log("Клик по карточке:", id),
    onDone: (id: string) => console.log("Свайп вправо (выполнено):", id),
    onDelete: (id: string) => console.log("Свайп влево (удалено):", id),
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export const Big: Story = {
  args: {
    id: "2",
    status: EventCardStatus.Backlog,
    cardTitle: "Менторство встреча",
    tag: {
      title: "Менторство",
      color: "#73AFBC",
    },
    startDateTime: "2025-03-07T11:30:00Z",
    endDateTime: "2025-03-07T13:30:00Z",
    height: getCardHeight("2025-03-07T11:30:00Z", "2025-03-07T13:30:00Z"),
    onClick: (id: string) => console.log("Клик по карточке:", id),
    onDone: (id: string) => console.log("Свайп вправо (выполнено):", id),
    onDelete: (id: string) => console.log("Свайп влево (удалено):", id),
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export const StatusDone: Story = {
  args: {
    id: "3",
    status: EventCardStatus.Done,
    cardTitle: "Задача выполнена",
    tag: {
      title: "Работа",
      color: "blue",
    },
    startDateTime: "2025-03-07T19:30:00Z",
    endDateTime: "2025-03-07T20:30:00Z",
    height: getCardHeight("2025-03-07T19:30:00Z", "2025-03-07T20:30:00Z"),
    onClick: (id: string) => console.log("Клик по карточке:", id),
    onDone: (id: string) => console.log("Свайп вправо (выполнено):", id),
    onDelete: (id: string) => console.log("Свайп влево (удалено):", id),
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export const StatusCanceled: Story = {
  args: {
    id: "4",
    status: EventCardStatus.Canceled,
    cardTitle: "Задача отменена",
    tag: {
      title: "Работа",
      color: "gray",
    },
    startDateTime: "2025-03-07T17:30:00Z",
    endDateTime: "2025-03-07T18:30:00Z",
    height: getCardHeight("2025-03-07T17:30:00Z", "2025-03-07T18:30:00Z"),
    onClick: (id: string) => console.log("Клик по карточке:", id),
    onDone: (id: string) => console.log("Свайп вправо (выполнено):", id),
    onDelete: (id: string) => console.log("Свайп влево (удалено):", id),
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutTagAndDate: Story = {
  args: {
    id: "5",
    status: EventCardStatus.Backlog,
    cardTitle: "Событие без тега и времени",
    tag: {
      title: "",
      color: "#73AFBC",
    },
    startDateTime: null,
    endDateTime: null,
    height: "25px",
    onClick: (id: string) => console.log("Клик по карточке:", id),
    onDone: (id: string) => console.log("Свайп вправо (выполнено):", id),
    onDelete: (id: string) => console.log("Свайп влево (удалено):", id),
  },
  decorators: [
    (Story) => (
      <div style={{ width: "220px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutTag: Story = {
  args: {
    id: "6",
    status: EventCardStatus.Backlog,
    cardTitle: "Событие без тега",
    tag: {
      title: "",
      color: "",
    },
    startDateTime: "2025-03-07T19:30:00Z",
    endDateTime: "2025-03-07T20:30:00Z",
    height: getCardHeight("2025-03-07T19:30:00Z", "2025-03-07T20:30:00Z"),
    onClick: (id: string) => console.log("Клик по карточке:", id),
    onDone: (id: string) => console.log("Свайп вправо (выполнено):", id),
    onDelete: (id: string) => console.log("Свайп влево (удалено):", id),
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};
