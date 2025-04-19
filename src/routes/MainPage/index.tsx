import { JSX } from 'react';
import { Calendar } from '../../features/Calendar/CalendarFeature';
import { AppHeaderWidget } from '../../widgets/AppHeader/AppHeaderWidget';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../__root';
import { ActionsToolbar } from '../../widgets/ActionsToolbar/ActionsToolbar';
import { CalendarDateSlider } from '../../features/MonthDays/CalendarDateSliderFeature';
import { ProtectedRoute } from '../ProtectedRoute';

const MainPage = (): JSX.Element => {
  return (
    <>
      <ProtectedRoute>
        <AppHeaderWidget />
        {/* widget/calendarToolbar */}
        <ActionsToolbar />
        {/* feature/calendarDates */}
        <CalendarDateSlider />
        {/* feataure/calendar */}
        <Calendar />
      </ProtectedRoute>
    </>
  );
};

export const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/main',
  component: MainPage,
});

export default MainPage;
