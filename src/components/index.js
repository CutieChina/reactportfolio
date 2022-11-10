import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			Home
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Info
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Review
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
