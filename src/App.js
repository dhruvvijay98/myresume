import logo from "./myimage.jpg";
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
            <h4>Phone: 8003865243</h4>
            <h4>Email: dhruvvijay0698@gmail.com</h4>
            <h4>Education: B-tech in Mechanical Engineering</h4>
          </div>
          <div>
            <img src={logo} />
          </div>
        </div>
        <div className="info">
          <div>
            <h4>Technologies:</h4>
            <p>HTML, CSS, JavaScript, ReactJS, Core Java</p>
          </div>
          <div>
            <h4>Experience:</h4>
            <p>
              2 years as an Assistant Manager in a bearing manufacturing company
              NEIL Jaipur
            </p>
            <h4>Project:</h4>
            <p>
              Designed and developed a user-friendly e-Health Card platform with
              secure authentication mechanisms. Built an intuitive user
              interface using HTML, CSS, JavaScript, and React for seamless
              navigation and access to medical information. Utilized Spring
              Framework for backend development and MySQL for efficient database
              management. Addressed challenges in managing physical medical
              records by enabling secure digital storage and retrieval. Proposed
              future enhancements, including built-in scanners, simplified
              doctor appointment scheduling, health check-ups, and billing
              history features
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
