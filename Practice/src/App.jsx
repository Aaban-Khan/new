import KgButton from "./KgButton";
function App(){

  let myname="Aaban Khan"
  
  return <div>
    <h1> hellow worldd, I'm {myname}</h1>
    <KgButton></KgButton>
    <img src="data:image/jpeg;base64,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" alt="" />
    </div>
}

export default App;