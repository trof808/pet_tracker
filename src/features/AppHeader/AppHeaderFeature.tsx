import { JSX } from "react"
import { AppHeaderUi } from "../../entities/appheader/ui/AppHeader/AppHeaderUi"
import { useCheckAuth } from "./lib/hooks/useCheckAuth";

export const AppHeaderFeature = (): JSX.Element => {
  // будем передавать данные через пропсы для аватарки и имени пользователя
  const userInfo = useCheckAuth();

  return (
    <AppHeaderUi userMail={userInfo?.email} />
  )
}