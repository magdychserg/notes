

import React from "react";
import {
Box,
Container,
Row,
Column,
Heading,
} from "./MenuStyle";

export const Menu = () => {
return (
	<Box>

	<Container>
		<Row>
		<Column>
			<Heading>UserName</Heading>

		</Column>
		<Column>
			<Heading>Group</Heading>

		</Column>
		<Column>
			<Heading>Type</Heading>

		</Column>

		</Row>
	</Container>

	</Box>
);
};
