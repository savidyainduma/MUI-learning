import { Button, Container,Box, Stack } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Box>
        <NavBar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </Stack>
      </Box>
      
    </div>
  );
}

export default App;
