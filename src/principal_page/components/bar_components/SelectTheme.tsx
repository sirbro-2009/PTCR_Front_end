import { Switch } from "@/components/ui/switch"
import useUiChanges from "./login/useUIchanges"
export default function SelectTheme(){
  const {handleTheme,theme}= useUiChanges()
  return (
    <Switch
      id="airplane-mode"
      onClick={handleTheme}
      className={`cursor-pointer scale-200`}
      checked={theme==='dark'}
    />
  )
}