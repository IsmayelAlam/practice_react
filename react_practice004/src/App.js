import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import AlaxaImg from "./Assets/alexa.png";
import CortanaImg from "./Assets/cortana.png";
import SiriImg from "./Assets/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa789"
                image={AlaxaImg}
                description="Lorem ipsum dolor sit amet consectetur, adipisicing."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                image={CortanaImg}
                description="Adipisci omnis nisi cum fugit enim voluptatibus voluptatibus."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri123"
                image={SiriImg}
                description="Facilis asperiores repellat accusamus saepe."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
