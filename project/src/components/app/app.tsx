import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { IAppStore } from '../../types/appstore.types';
import {Main} from '../main/main';
import {AppRoute, AuthorizationStatus} from '../../const';
import { SignIn } from '../sign-in/sign-in';
import { MyList } from '../my-list/my-list';
import { MoviePage } from '../movie-page/movie-page';
import { Player } from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AddReview } from '../add-review/add-review';
import PrivateRoute from '../private-route/private-route';

export function App({...args}: IAppStore): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main {...args}/>}/>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<MoviePage/>}/>
        <Route path={AppRoute.AddReview} element={<AddReview/>}/>
        <Route path={AppRoute.Player} element={<Player/>}/>
        <Route path='*' element={<NotFoundScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}
