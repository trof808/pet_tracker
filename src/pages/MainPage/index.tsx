import { JSX } from "react";
import { Calendar } from "../../shared/ui/Calendar/Calendar";
import { AppHeader } from "../../shared/ui/AppHeader/AppHeader";

const MainPage = (): JSX.Element => {
  return (
    <>
      <AppHeader />
      <Calendar />
    </>
  )
};

export default MainPage;