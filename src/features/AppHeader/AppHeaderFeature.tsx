import { JSX } from "react"
import { AppHeaderUi } from "./ui/AppHeader/AppHeaderUi"
import { useCheckAuth } from "./hooks/useCheckAuth";

export const AppHeaderFeature = (): JSX.Element => {
  const userInfo = useCheckAuth();

  return (
    <AppHeaderUi userMail={userInfo?.email} />
  )
}