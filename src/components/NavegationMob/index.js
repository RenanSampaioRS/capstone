import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaUsers, FaUserAlt } from "react-icons/fa";
import { BiSearchAlt, BiLogOutCircle } from "react-icons/bi";
import { HeadMob, DivIcon } from "./style";
import { useHistory } from "react-router-dom";
import { User } from "../../providers/UserProvider";

const NavegationMob = () => {
  const { loggedUser } = User();
  const { setId } = User();
  const history = useHistory();

  const logoutUser = () => {
    localStorage.removeItem("token");
    setId(false);
    history.push("/");
  };
  return (
    <div>
      {localStorage.getItem("token") && (
        <HeadMob>
          <DivIcon>
            <Link>
              <ImHome />
            </Link>
          </DivIcon>

          {loggedUser.type === "pf" ? (
            <DivIcon>
              <Link>
                <FaUsers />
              </Link>
            </DivIcon>
          ) : (
            <DivIcon>
              <Link>
                <FaUserAlt />
              </Link>
            </DivIcon>
          )}

          <DivIcon>
            <Link>
              <BiSearchAlt />
            </Link>
          </DivIcon>

          <DivIcon>
            <Link to="/">
              <BiLogOutCircle>
                <button onClick={logoutUser} />
              </BiLogOutCircle>
            </Link>
          </DivIcon>
        </HeadMob>
      )}
    </div>
  );
};

export default NavegationMob;
