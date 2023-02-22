import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MylistScreen from '../../pages/my-list-screen/my-list-screen';
import MovieListScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={'/'}
            element={<MainScreen />}
          />
          <Route
            path={'/login'}
            element={<LoginScreen />}
          />
          <Route
            path={'/my-list'}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <MylistScreen />
              </PrivateRoute>

            }
          />
          <Route
            path={'/movie:id'}
            element={<MovieListScreen />}
          />
          <Route
            path={'/add-review'}
            element={<AddReviewScreen />}
          />
          <Route
            path={'/player'}
            element={<PlayerScreen />}
          />
          <Route
            path={'*'}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
