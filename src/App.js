import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="heading">
          <h1>My Resume</h1>
        </div>
        <div className="container">
          <div>
            <h4>Name: Dhruv Vijay</h4>
            <h4>Phone: 800XXXXXXX</h4>
            <h4>Email: dhruv@gmail.com</h4>
            <h4>Education: B-tech</h4>
          </div>
          <div>
            <img src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600w-2437772333.jpg" />
          </div>
        </div>
        <div className="info">
        <div>
          <h4>Learning:</h4>
          <p>Html,Css,JS,ReactJS,Dbms</p>
        </div>
        <div>
          <h4>Expierience:</h4>
          <p>
            2 years as an Assistant Manager in a bearing manufacturing company
            NEIL Jaipur
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
