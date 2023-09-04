import { useAuth } from '../hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return <button
    className="bg-white px-8 py-3 text-base font-medium text-teal-600 border-teal-600 hover:bg-teal-700 md:py-4 md:px-10 md:text-lg"
    onClick={logout}>
    Logout
  </button>;
};

export default LogoutButton;