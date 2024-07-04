import Link from 'next/link';
import { useRouter } from 'next/router';


const Sidebar = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Logic to handle logout
        router.push('/login');
    };

    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
            <div className="p-4">
                <h2 className="text-2xl font-bold">Admin Panel</h2>
            </div>
            <nav className="flex flex-col flex-1 p-4">
                <Link href="/" className="py-2 px-4 hover:bg-gray-700 rounded">
                    Home
                </Link>
                <Link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goholistic.org.in%2Fnew-home&psig=AOvVaw3GfZdZndEaiX92I5xzji-K&ust=1720103115472000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiW186Ji4cDFQAAAAAdAAAAABAK" className="py-2 px-4 hover:bg-gray-700 rounded">
                    Profile
                </Link>
                <Link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goholistic.org.in%2Fnew-home&psig=AOvVaw3GfZdZndEaiX92I5xzji-K&ust=1720103115472000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiW186Ji4cDFQAAAAAdAAAAABAK" className="py-2 px-4 hover:bg-gray-700 rounded">
                    Settings
                </Link>
            </nav>
            <div className="p-4">
                <button
                    onClick={handleLogout}
                    className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 rounded text-white font-bold"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
