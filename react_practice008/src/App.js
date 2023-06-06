import Accordion from "./components/Accordion";
// import ButtonPage from "./pages/ButtonPage";

function App() {
  const items = [
    {
      label: "Can i use react on any project?",
      content: "Yes, you can use react to create any web related project.",
      id: 1,
    },
    {
      label: "Is tailwind useable with react?",
      content: "Yes, react and tailwind can be use to create any web project.",
      id: 2,
    },
    {
      label: "Is react better then javascript?",
      content: "React is a javascript library so it can't be better.",
      id: 3,
    },
  ];
  return (
    <div className="bg-slate-700 h-screen">
      <Accordion items={items} />
    </div>
  );
}

export default App;
