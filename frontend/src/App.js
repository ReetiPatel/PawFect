import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to static HTML page
    window.location.href = "/index.html";
  }, []);

  return null;
}

export default App;
