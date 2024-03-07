import { Link } from "react-router-dom";

export default function DesktopNab() {
  return (
    <div>
      <div className="other-nav-component">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/cuisine">
          Cuisine
        </Link>
        <Link className="link" to="/calories">
          Calories
        </Link>
        <Link className="link" to="/search-by-ingredients">
          Whats in your Pantry?
        </Link>
        {/* <Button colorScheme="teal">Find</Button> */}
      </div>
    </div>
  );
}
