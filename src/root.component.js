import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.href}
            key={`route-key-'${route.name}`}
            element={<route.component {...props} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
