import { FaHamburger } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <div>
      <button ref={btnRef} onClick={onOpen}>
        <FaHamburger size={22} color="teal"></FaHamburger>
      </button>

      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 25,
                marginBottom: 20,
              }}
            >
              <Link className="link" to="/" onClick={onClose}>
                Home
              </Link>
              <Link className="link" to="/cuisine" onClick={onClose}>
                Cuisine
              </Link>
              <Link className="link" to="/calories" onClick={onClose}>
                Calories
              </Link>
              <Link
                className="link"
                to="/search-by-ingredients"
                onClick={onClose}
              >
                Whats in your Pantry?
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
