import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';



const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
          <Route path="/dialogs" render={() => <DialogsContainer/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
          <Route path="/users" render={() => <UsersContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
