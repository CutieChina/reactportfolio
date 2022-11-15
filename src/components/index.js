import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/homepage" activeStyle>
			Home
		</NavLink>
		<NavLink to="/info" activeStyle>
			Info
		</NavLink>
		<NavLink to="/review" activeStyle>
			Review
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
