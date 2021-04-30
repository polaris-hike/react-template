import './App.css';
import { observer } from 'mobx-react';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import { useAppContext } from './components/hooks';

function App() {
  const { commonStore } = useAppContext();

  return (
    <IntlProvider
      locale={commonStore.language}
      messages={commonStore.localMessages}>
      <div className="App">
        <Header></Header>
        <main>hello world</main>
      </div>
    </IntlProvider>
  );
}

export default observer(App);
