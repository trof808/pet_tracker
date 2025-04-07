import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Calendar } from "./CalendarFeature";

import "../../../assets/fonts/font.css";
import { EventCardStatus } from "../EventCard/EventCard";

const meta = {
  title: "Shared/UI/Calendar",
  component: Calendar,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphonex",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tasks: [
      {
        id: '1',
        status: EventCardStatus.Backlog,
        cardTitle: 'Встреча 1',
        tag: { title: 'Работа', color: 'blue' },
        startDateTime: '2025-03-17T11:20:00Z',
        endDateTime: '2025-03-17T12:00:00Z',
      },
      {
        id: '2',
        status: EventCardStatus.Backlog,
        cardTitle: 'Встреча 2',
        tag: { title: 'Работа', color: 'green' },
        startDateTime: '2025-03-17T11:00:00Z',
        endDateTime: '2025-03-17T12:20:00Z',
      },
      {
        id: '3',
        status: EventCardStatus.Backlog,
        cardTitle: 'Задача A',
        tag: { title: 'Работа', color: 'blue' },
        startDateTime: '2025-03-17T09:15:00Z',
        endDateTime: '2025-03-17T10:00:00Z',
      },
      {
        id: '4',
        status: EventCardStatus.Done,
        cardTitle: 'Задача B',
        tag: { title: 'Личное', color: 'orange' },
        startDateTime: '2025-03-17T13:10:00Z',
        endDateTime: '2025-03-17T13:55:00Z',
      },
      {
        id: '5',
        status: EventCardStatus.Backlog,
        cardTitle: 'Задача C',
        tag: { title: 'Работа', color: 'blue' },
        startDateTime: '2025-03-17T14:00:00Z',
        endDateTime: '2025-03-17T15:00:00Z',
      },
      {
        id: '6',
        status: EventCardStatus.Backlog,
        cardTitle: 'Задача D',
        tag: { title: 'Личное', color: 'red' },
        startDateTime: '2025-03-17T16:00:00Z',
        endDateTime: '2025-03-17T17:00:00Z',
      },
      {
        id: '7',
        status: EventCardStatus.Backlog,
        cardTitle: 'Задача E',
        tag: { title: 'Личное', color: 'red' },
        startDateTime: '2025-03-17T19:00:00Z',
        endDateTime: '2025-03-17T20:55:00Z',
      },
      {
        id: '8',
        status: EventCardStatus.Done,
        cardTitle: 'Заплатить за аренду квартиры',
        tag: { title: '', color: 'red' },
        startDateTime: null,
        endDateTime: null,
      },
      {
        id: '9',
        status: EventCardStatus.Backlog,
        cardTitle: 'День рождения друга',
        tag: { title: '', color: 'black' },
        startDateTime: null,
        endDateTime: null,
      },
    ],
  },
};
