import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Paragraph from "./components/Paragraph.jsx";
import HelloWorldParent from "./components/HelloWorldParent.jsx";
import Container from "./components/Container.jsx";
import TodoList from "./components/TodoList.jsx";
import EventObject from "./components/EventObject.jsx";
import EventPropagation from "./components/EventPropagation.jsx";
import PreventDefault from "./components/PreventDefault.jsx";
import Counter from "./components/Counter.jsx";
import Snapshot from "./components/Snapshot.jsx";
import ContactFrom from "./components/ContactFrom.jsx";
import ContactFromWithoutRef from "./components/ContactFromWithoutRef.jsx";
import CartWithoutReducer from "./components/CartWithoutReducer.jsx";
import CartWithReducer from "./components/CartWithReducer";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeContextExample from "./components/ThemeContextExample.jsx";
import RefDOMManipulation from "./components/RefDOMManipulation.jsx";
import EffectComponent from "./components/EffectComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/* <HelloWorldParent /> */}
      {/* <Paragraph />
      {/* <TodoList /> */}
      {/* <CartWithReducer /> */}
      <EffectComponent />
    </ThemeProvider>
  </StrictMode>
);
