import ProfileCard from "./ProfileCard";
import AlaxaImg from "./Assets/alexa.png";
import CortanaImg from "./Assets/cortana.png";
import SiriImg from "../Assets/siri.png";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa789" />
      <ProfileCard title="Cortana" handle="@cortana456" />
      <ProfileCard title="Siri" handle="@siri123" />
    </div>
  );
}

export default App;
