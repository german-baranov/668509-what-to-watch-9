
import { IAppStore } from '../../types/appstore.types';
import {Main} from '../main/main';

export function App({...args}: IAppStore): JSX.Element {
  return <Main {...args}/>;
}
