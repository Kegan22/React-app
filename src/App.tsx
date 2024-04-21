import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // PART1--

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    // PART1--
    // <div>
    //   <Alert>
    //     Hello <span>world</span>
    //   </Alert>
    // </div>
    // PART2--
    <div>
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default App;
