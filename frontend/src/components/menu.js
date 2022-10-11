import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    Heading,
} from "./MenuStyle";
import {BrowserRouter, Link} from "react-router-dom";

export const Menu = () => {
    return (
        <Box>

            <Container>
                <Row>
                    <Column>

                        <BrowserRouter>
                            <nav>
                                 <Heading><Link to='/users'>Users</Link></Heading>

                            </nav>
                        </BrowserRouter>
                    </Column>
                    <Column>
                        <BrowserRouter>
                            <nav>
                                 <Heading><Link to='/projects'>Projects</Link></Heading>

                            </nav>
                        </BrowserRouter>

                    </Column>
                    <Column>
                        <BrowserRouter>
                            <nav>
                                 <Heading><Link to='/todos'>Todo</Link></Heading>

                            </nav>
                        </BrowserRouter>

                    </Column>

                </Row>
            </Container>

        </Box>
    );
};
