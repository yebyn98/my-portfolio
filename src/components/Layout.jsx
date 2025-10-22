import { Container } from "@chakra-ui/react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    )
}