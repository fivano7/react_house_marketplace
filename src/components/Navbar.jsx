import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useNavigate();

  const pathMatchRoute = (route) => {
    if (route === window.location.pathname) {
      return {
        iColor: "#2c2c2c",
        iStyle: "navbarListItemNameActive",
      };
    } else {
      return {
        iColor: "#8f8f8f",
        iStyle: "navbarListItemName",
      };
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/").iColor}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/").iStyle}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers").iColor}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/offers").iStyle}>Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/profile").iColor}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/profile").iStyle}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
