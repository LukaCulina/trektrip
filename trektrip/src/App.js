import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 

function App() {
  return (
    <HashRouter>
      <AuthContextProvider>
        <Header></Header>
        <div className="app">
          <Container maxWidth="xl">
                <Routes>
                  <Route path='/' element={<Home/>} exact/>
                  <Route path='/profil/:userId' element={<User/>}/>
                  <Route path='/putovanja' element={<Trips/>}/>
                  <Route path='/prijava' element={<Login/>}/>
                </Routes>
          </Container>
        </div>
        <Footer></Footer>
      </AuthContextProvider>
  </HashRouter>
  );
}

export default App;
