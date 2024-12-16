import { createBrowserRouter } from 'react-router';
import './App.scss';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { RouterProvider } from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
    ]);

    return (
        <>
            <Navigation />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
