import { useAuth } from '../hooks/useAuth';

const LogoutButton = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        login({
            id: '1',
            name: 'John Doe',
            email: 'john.doe@email.com',
        });
    };

    return (
        <button
            className='bg-teal-600 px-8 py-3 mr-3 text-base font-medium text-white hover:bg-teal-700 md:py-4 md:px-10 md:text-lg'
            onClick={handleLogin}>
            Login
        </button>
    );
};

export default LogoutButton;