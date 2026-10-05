import NavBar from '@/components/NavBar';
import { createBrowserRouter } from 'react-router-dom';
import GameDetailPage from './pages/GameDetailPage';
import HomePage from './pages/HomePage';
import Layout from './pages/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:id', element: <GameDetailPage /> },
    ],
  }
]);

export default router;
