import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';

export default function Root(props) {
  return (
    <BrowserRouter>
      <section>
        <Home {...props} />
      </section>
    </BrowserRouter>
  );
}
