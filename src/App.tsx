import { useRef } from "react";
import Main from "./Component/Main";
import Cointainer from "./PolymorphicComponent/Cointainer";
import Input from "./WrapperComponent/Input";

function App() {
  const a = useRef<HTMLInputElement>(null);
  return (
    <div>
      <main>
        <Input type="text" label="your Name " id="name" />
        <Input
          type="number"
          label="your Name "
          id="name"
          disabled={true}
          ref={a}
        />
        {/* <Cointainer as="button">button from Polymorphic Componet </Cointainer> */}
      </main>
    </div>
  );
}

export default App;
