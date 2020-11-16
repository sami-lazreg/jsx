
import "./App.css";
import im1 from "./im1.png"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">sami lazreg</h1>

        <br />

        <img src="/im2.png" />

        <br />

        <img src={im1} alt ='myImage' />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
