import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  function handleClickBack() {
    history.goBack();
  }
  function handleGoHome() {
    history.push("/");
  }
  return (
    <div>
      <h2> About me </h2>
      <p>Blind Texter</p>
      <p>Blind Texter</p>
      <button onClick={handleClickBack}>Take me back! </button>
      <button onClick={handleGoHome}>Take me home!</button>
    </div>
  );
}

export default About;
