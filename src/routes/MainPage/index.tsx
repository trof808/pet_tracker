import { JSX } from "react";
import { Calendar } from "../../features/Calendar/CalendarFeature";
import { AppHeader } from "../../shared/ui/AppHeader/AppHeader";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../__root";
import { ActionsToolbar } from "../../widgets/ActionsToolbar/ActionsToolbar";
import { CalendarDateSlider } from "../../features/MonthDays/CalendarDateSliderFeature";

const MainPage = (): JSX.Element => {
  return (
    <>
      <AppHeader />
      {/* widget/calendarToolbar */}
      <ActionsToolbar />
      {/* feature/calendarDates */}
      <CalendarDateSlider />
      {/* feataure/calendar */}
      <Calendar />
    </>
  )
};

export const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/main',
  component: MainPage,
});

export default MainPage;