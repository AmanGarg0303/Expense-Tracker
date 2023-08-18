import "./App.css";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App bg-purple-300 min-h-screen">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400 to-blue-500 blur-3xl opacity-70 -z-50" /> */}

      <Home />

      <Toaster />
    </div>
  );
}

export default App;
