import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";
import * as Pages from "./pages";

const App = () => {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);

  return (
    <>
      <div className="text-7xl font-bold">
        App
        <Button
          variant="destructive"
          size="lg"
          onClick={() => console.log("ok")}
        >
          Click
        </Button>
      </div>
      <Pages.About />
    </>
  );
};
export default App;
