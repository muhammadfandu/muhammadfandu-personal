import LoginButton from '../../src/components/loginButton';
import LogoutButton from '../../src/components/logoutButton';
import { useAuth } from '../../src/hooks/useAuth';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        login({
            id: '1',
            name: 'John Doe',
            email: 'john.doe@email.com',
        });
    };

    return (
        <div className="text-center mt-12">
            <div>
                <h1 className='text-4xl font-bold'>Login</h1>
            </div>
            <div className="mt-5 justify-center sm:mt-8 sm:flex ">
                <div className="mt-3 sm:mt-0 sm:ml-3">
                    <LoginButton></LoginButton>
                    <LogoutButton></LogoutButton>
                </div>
            </div>

        </div>
    );
};

export default Login;