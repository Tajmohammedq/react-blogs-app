
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import NewPost from './NewPost'
import Postpage from './Postpage'
import Missing from './Missing'
import BeforeHome from './BeforeHome'
import About from './About'
import Edit from './Edit'
import {  Route, Switch} from 'react-router-dom';
import { DataProvider } from './context/DataContext'
function App() {

return (
    <div className="App mt-3 col-lg-5 col-md-10 col-sm-10 shadow-lg border  mx-auto ">
      <DataProvider>
          <Header/>
          <Nav />
            <Switch >
              <Route  exact path="/" >
                <BeforeHome></BeforeHome>
              </Route>
              <Route exact path="/post">
                <NewPost></NewPost>
              </Route>
              <Route exact path="/post/:id">
                <Postpage></Postpage>
              </Route>
              <Route exact path="/edit/:id">
                <Edit></Edit>
              </Route>
              <Route path="/about" component={About}/>
              <Route path="*" component={Missing}/>

            </Switch>
            <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
