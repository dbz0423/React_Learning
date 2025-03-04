// import ThemeToggle from "./components/ThemeToggle";
// import TextInput from "./components/TextInput";
// import TodoList from "./components/TodoList";
// import FetchData from "./components/FetchData";
// import PageTitle from "./components/PageTitle";
// import Time from "./components/Time";
// import Weather from "./components/Weather";
// import ThemeProvider from "./components/ThemeProvider";
// import ThemeButton from "./components/ThemeButton";
// import UserPage from "./components/UserPage";
// import LoginForm from "./components/LoginForm";
// import LogoutButton from "./components/LogoutButton";
// import UserStatus from "./components/UserStatus";
// import { UserProvider } from "./context/UserLoginContext";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
// import Parent from "./components/Parent";
// import ExensiveComponentParent from "./components/ExensiveComponentParent";
// import FocusInput from "./components/FocusInput";
// import PreviousValue from "./components/PreviousValue";
// import Parent1 from "./components/Parent1";
// import Parent2 from "./components/Parent2";
import AnimateBox from "./components/AnimateBox";
import ComponentSize from "./components/ComponentSize";
import Data from "./components/Data";
import Search from "./components/Search";

// import ListFilterParent from "./components/ListFilterParent";

// import "./App.css";

function App() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <Time /> */}
      {/* <Weather /> */}
      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
      {/* <UserPage /> */}
      {/* <UserProvider>
        <div style={containerStyle}>
          <h1>欢迎来到我的世界</h1>
          <LoginForm />
          <UserStatus />
          <LogoutButton />
        </div>
      </UserProvider> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <ExpensiveCalculationParent /> */}
      {/* <ListFilterParent /> */}
      {/* <Parent /> */}
      {/* <ExensiveComponentParent /> */}
      {/* <FocusInput /> */}
      {/* <PreviousValue /> */}
      {/* <Parent1 /> */}
      {/* <Parent2 /> */}
      {/* <ComponentSize /> */}
      {/* <AnimateBox /> */}
      {/* <Data /> */}
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </>
  );
}

// const containerStyle = {
//   textAlign: "center",
//   padding: "20px",
// };

export default App;
