import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <div>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;