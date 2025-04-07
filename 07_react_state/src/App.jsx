import "./App.css";
import CounterUseState from "./components/CounterUseState";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import UpdateUser from "./components/UpdateUser";
import UserProvider from "./components/UserProvider";
import UserProfile from "./components/UserProfile";
import CounterZustand from "./components/CounterZustand";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CounterUseState />
      <Profile />
      <TodoList />
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <CounterZustand />
      <Cart />
    </>
  );
}

export default App;
