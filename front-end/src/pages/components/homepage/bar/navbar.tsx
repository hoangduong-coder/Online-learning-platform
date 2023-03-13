import {
  Logout,
  Notifications,
  PersonOutline,
  Settings,
} from "@mui/icons-material"

import { Avatar } from "@mui/material"

const UserMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <PersonOutline />
          <p>Profile</p>
        </li>
        <li>
          <Settings />
          <p>Settings</p>
        </li>
        <li>
          <Logout />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  )
}
const NavBar = () => {
  return (
    <div>
      <div>
        <Notifications />
      </div>
      <div>
        <Avatar>HD</Avatar>
      </div>
      <UserMenu />
    </div>
  )
}

export default NavBar
