import { createBrowserRouter } from 'react-router-dom';
import GameDetailPage from './pages/GameDetailPage';
import HomePage from './pages/HomePage';
import Layout from './pages/layout';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage /> ,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:id', element: <GameDetailPage /> },
    ],
  }
]);

export default router;
