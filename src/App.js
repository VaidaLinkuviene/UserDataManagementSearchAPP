import MainPage from './pages/MainPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
