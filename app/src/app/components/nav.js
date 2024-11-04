import { Button } from "@chakra-ui/react"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react"

const Nav = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button size="sm" variant="outline">
          Select Route
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem asChild value="dashboard">
          <a
            href="/dashboard"
            rel="noreferrer"
          >
            Dashboard
          </a>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}

export default Nav