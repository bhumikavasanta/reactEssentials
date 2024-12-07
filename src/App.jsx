import { useState } from 'react';
import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';
import domImg from './assets/jsx-ui.png';
import Header from './components/Header/Header';
import CoreConcept from './components/Core Concepts/CoreConcepts';
import TabButton from './components/TabButton/TabButton';
import { EXAMPLES } from './components/data';

function App() {

  const[selectedTopic, setSelectedTopic] = useState('components');

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>
          Core Concepts
        </h2>
        <ul>
          <CoreConcept
            title="Components"
            description="Reusable UI pieces for applications"
            img={componentsImg}
          />
          <CoreConcept
            title="Props"
            description="Pass data to child components"
            img={propsImg}
          />
          <CoreConcept
            title="State"
            description="Manages dynamic, interactive data"
            img={stateImg}
          />
          <CoreConcept
            title="Virtual DOM"
            description="Efficient UI updates and rendering"
            img={domImg}
          />
        </ul>
        </section>
        <section id="examples">
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton onClick={() => handleClick('components')} isSelected={selectedTopic==='components'}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')} isSelected={selectedTopic==='jsx'}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')} isSelected={selectedTopic==='props'}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')} isSelected={selectedTopic==='state'}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>
              {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
