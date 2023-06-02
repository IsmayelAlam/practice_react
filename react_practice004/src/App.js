import ProfileCard from "./ProfileCard";

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
