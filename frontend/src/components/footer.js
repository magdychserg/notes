

import React from "react";
import {
Box,
Container,
Row,
Column,
Heading,
} from "./FooterStyles";

export const Footer = () => {
return (
	<Box>

	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>

		</Column>
		<Column>
			<Heading>Services</Heading>

		</Column>
		<Column>
			<Heading>Contact Us</Heading>

		</Column>
		<Column>
			<Heading>Social Media</Heading>

		</Column>
		</Row>
	</Container>
		<h3 style={{ color: "green",
				textAlign: "center",
				marginTop: "auto" }}>
	Copyright &copy; GeekShop-MagdychSV 2022
	</h3>
	</Box>
);
};
