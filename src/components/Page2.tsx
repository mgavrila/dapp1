import { useNavigate } from 'react-router-dom';

export const Page2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      PAGE 2 <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
