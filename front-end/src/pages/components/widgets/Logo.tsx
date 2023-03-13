import { logo } from "../../../styles/font"

// import styles from "../../styles/Logo.module.css"

const Logo = () => {
  return (
    <div className="logo">
      <p style={logo.style} className="logoContent">
        HD
      </p>
      <style jsx>
        {`
          .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid var(--foreground-light);
            padding: 2px;
            margin: 0 20px;
          }

          .logoContent {
            color: var(--foreground-light);
            font-size: var(--content-font-size);
          }
        `}
      </style>
    </div>
  )
}

export default Logo
