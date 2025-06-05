import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Paragraph from "./components/Paragraph.jsx";
import HelloWorldParent from "./components/HelloWorldParent.jsx";
import Container from "./components/Container.jsx";
import TodoList from "./components/TodoList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorldParent />
    {/* <Paragraph />
    <Container>
      <p>Ini adalah konten dalam Container</p>
    </Container> */}
    <TodoList />
  </StrictMode>
);
