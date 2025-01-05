import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const menuItems = ["Home", "About", "Services", "Skills", "Experience"];

  // Set up IntersectionObserver to watch sections
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setSelectedItem(entry.target.id); // Set the active menu item based on the section in view
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    });

    // Observe each section by its ID
    menuItems.forEach((item) => {
      const section = document.getElementById(item);
      if (section) observer.observe(section);
    });

    // Clean up observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent h-15 sm:px-10 md:px-20 lg:px-[120px] justify-between"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Avatar name="SS" size="sm" />
          <p className="font-bold text-inherit pl-2">Suraj Singh</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color="blue"
              href={`#${item}`}
              onPress={() => setSelectedItem(item)}
              className={`${
                selectedItem === item ? "text-yellow-400" : "text-foreground"
              }`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#Contact" variant="bordered">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full text-${
                selectedItem === item ? "text-yellow-400" : "text-foreground"
              }`}
              href={`#${item}`}
              size="lg"
              onPress={() => setSelectedItem(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
