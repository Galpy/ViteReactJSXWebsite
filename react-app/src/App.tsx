import { useState } from "react";
import Blog from "./components/Blog";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <Blog />
    // <div>
    //   <Container maxWidth="lg" className="App">
    //     <Nav />
    //     <FirstSection />
    //   </Container>
    // </div>
  );
}

export default App;
