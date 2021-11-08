import './styles.scss';
import Router from 'config/Router';
import { ReduxSagaProvider } from 'framework';
import Viewer from '../Viewer';

export default function App() {
  return (
    <div className="App">
      <ReduxSagaProvider>
        <Router Viewer={Viewer} />
      </ReduxSagaProvider>
    </div>
  );
}
