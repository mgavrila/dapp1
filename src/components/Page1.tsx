import { useNavigate } from 'react-router-dom';

export const Page1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      PAGE 1 <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
