import "./NavBar.css";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { isMobile } from "../../config/Breakpoint";

export default function NavBar() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo-container">
          <Avatar
            size="md"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif"
            mb={2}
            mt={3}
          />
          <Link to="/" className="app-name">
            MealMate
          </Link>
        </div>

        {!isMobile ? <DesktopNav></DesktopNav> : <MobileNav></MobileNav>}
      </nav>
    </header>
  );
}
