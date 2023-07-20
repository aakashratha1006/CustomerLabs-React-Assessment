import { AppBar } from "@mui/material";
import { Header } from "./Components/Header/Header.jsx";
import { SaveSegmentButton } from "./Components/SaveSegment/SaveSegment";


// sx={{ top: 0 }}
function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Header text="View Audience" />
      </AppBar>
      <SaveSegmentButton />
    </div>
  );
}

export default App;
