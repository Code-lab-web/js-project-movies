import React from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome }  from './Welcome'
import { About } from './About'
import { Contact } from './Contact'
import { Nav } from './Nav'
import { MoviesList } from 'pages/MoviesList'
import { ShowMovies } from 'pages/ShowMovies'
import './App.css';
import SideBar from ".SideBar";
import 
function App () {
    return (
        <div className ="flex text-center text-green-500 font-bold ">
            Hallo custumer/member
            </p>
            </div>
        
    );
}

export const App = () => {
    return (
        <main>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<MoviesList />} />
                    <Route path="/movies/:slug" element={<ShowMovies />} />
                    <Route path="/" element={<Welcome />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}
export default App;