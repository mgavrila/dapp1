import { Link } from 'react-router-dom';
import { routes } from '../routes';

export const Home = () => {
  // Dispatch a custom event from the child application
  const customEvent = new CustomEvent('childAppEvent', {
    detail: { message: 'Hello from the child app' }
  });

  window.dispatchEvent(customEvent);

  return (
    <div>
      <h1>Welcome to dapp1</h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {routes.map((route) => (
          <Link key={route.name} to={route.href}>
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
