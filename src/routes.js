import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ToDoList } from './pages/to-do-list';
import Structure from "./components/structure";

const todoListItems = [
  {name: 'A', description: 'primeiro'},
  {name: 'B', description: 'segundo'},
  {name: 'C', description: 'terceiro'},
  {name: 'D', description: 'quarto'}
]

const menu = [
  { name: "Home", path: "/", component:  <div>Home</div> },
  { name: "Sobre", path: "/about", component: <div>About</div>},
  { name: "Usuários", path: "/users", component: <div>Users</div>},
  { name: "To Do List", path: "/todo", component: <ToDoList items={todoListItems}/>},
]

function Routes() {
  return (
    <Router>
      <Structure menu={menu}>
        <Switch>
          {menu.map(menuItem => {
            return (
              <Route key={menuItem.path} exact={true} path={menuItem.path}>
                <div className='content'>{menuItem.component}</div>
              </Route>
            )
          })}
        </Switch>
      </Structure>
    </Router>
  );
}

export default Routes;