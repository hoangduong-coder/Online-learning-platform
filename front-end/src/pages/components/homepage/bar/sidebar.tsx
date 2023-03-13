import { Category, Dehaze, School } from "@mui/icons-material"

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Dehaze />
          <h3>Dashboard</h3>
        </li>
        <li>
          <School />
          <h3>My courses</h3>
        </li>
        <li>
          <Category />
          <h3>Categories</h3>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
