
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



import './App.css';



import { Header,    Footer }                                                from './sections/index'
import { Home,      Profile, Fortnite, CallOfDuty, PUBG, Browse, Streams }  from './Pages/index'
import { Container, UpButton }                                              from './components/index'







const App = () => {

    return(
        
        <>
            <Router basename={'/ReactWeb'}> 
                <Header /> 
                <Container>

                    <Routes>
                        <Route    path = '/'             element = {<  Home        />}   />
                        <Route    path = '/Profile'      element = {<  Profile     />}   />
                        <Route    path = '/Browse'       element = {<  Browse      />}   />

                        <Route    path = '/OnlineGames'                                   >
                            <Route  path = '/OnlineGames/Fortnite'   element = {<  Fortnite    />} />
                            <Route  path = '/OnlineGames/CallOfDuty' element = {<  CallOfDuty  />} />
                            <Route  path = '/OnlineGames/PUBG'       element = {<  PUBG        />} />
                        </Route>

                        <Route    path = '/Streams'      element = {<  Streams     />}   />
                    </Routes>

                </Container>
                <UpButton />
                <Footer />
            </Router>
        </>

    )
}

export default App