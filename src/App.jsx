import { useState } from "react";
import QuestionsScreen from "./components/QuestionsScreen";
import StartScreen from "./components/StartScreen";

function App() {
    const [start, setStart] = useState(true);

    return <div>{start ? <QuestionsScreen /> : <StartScreen />}</div>;
}

export default App;
