import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

const AuthButton = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return (
      <Button
        variant="outline"
        onClick={signOut}
        className="flex items-center gap-2"
      >
        <LogOut size={16} />
        Sign Out
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={() => navigate('/auth')}
      className="flex items-center gap-2"
    >
      <User size={16} />
      Sign In
    </Button>
  );
};

export default AuthButton;