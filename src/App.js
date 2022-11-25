
import './App.css';
import Profile from './Profile.js';
import imageOne from './one.jpg';
import imageTwo from './two.jpg';
import pictureThree from './three.jpg';
import imageFour from './four.jpg';

function App() {
  return (
    <div>
      <Profile image={imageOne} name="Igor" age="32" description="I like sport, meeting with friends." />
      <hr />
      <Profile image={imageTwo} name="Sasha" age="33" description="I am looking for a partner for serious relationship." />
      <hr />
      <Profile image={pictureThree} name="Jhon" age="35" description="I am frendly, positive person, I like traveling."/>
      <hr />
      <Profile image={imageFour} name="Oleg" age="37" description="I am web-developer, I have a dog, I like traveling and sport."/>  
      <hr />  
    </div>
  );
}

export default App;
