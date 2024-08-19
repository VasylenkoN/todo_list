import React from "react";
import TodoList from "./components/TodoList";
import {Container} from "react-bootstrap";

const App = () => {
    return(
        <Container>
            <TodoList/>
        </Container>
    );
};

export default App;