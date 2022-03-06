import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

import useLogOut from "../hooks/useLogOut";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useLogOut();
  const { user } = useAuthContext();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">SignUp</Link>
            </li>
          </>
        )}

{user && (
    <>
      <li>Hello, {user.displayName}</li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
        </>
              )}
      </ul>
    </nav>
  );
};

export default Navbar;
