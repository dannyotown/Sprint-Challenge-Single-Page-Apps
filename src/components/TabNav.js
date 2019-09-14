import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/
const panes = [
    { menuItem: 'Home Page', render: () => <Tab.Pane><WelcomePage></WelcomePage></Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList></CharacterList></Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane></Tab.Pane> },
  ]
  
  const TabExampleBasic = () => <Tab panes={panes} />
  export default TabExampleBasic

