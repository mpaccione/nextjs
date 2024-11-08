import { Button } from "@chakra-ui/react"
import {
  Flex,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react"

const Nav = () => (
  <Flex alignItems="center" justifyContent="space-between" padding="5px">
    <h3>
      NextJS Auto
    </h3>
    <MenuRoot>
      <MenuTrigger asChild>
        <Button size="sm" variant="outline">
          Menu
        </Button>
      </MenuTrigger>
      <MenuContent padding="5px" position="absolute" right="0px" top="40px">
        <MenuItem asChild value="home">
          <a
            href="/"
            rel="noreferrer"
          >
            Homepage
          </a>
        </MenuItem>
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
  </Flex>
)

export default Nav