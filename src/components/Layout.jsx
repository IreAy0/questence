import Header from './Header';
import Sidebar from './ui/Sidebar';

const Layout = ({children}) => {
    return (
        <div className="flex flex-col h-screen">
          <Header />
            <div className="flex flex-1 pt-16">
                <aside className="bg-white w-80  fixed border-r  border-black border-opacity-50 top-28 bottom-0 left-0 z-40 overflow-y-auto overflow-x-hidden">
                    <Sidebar />
                </aside>
                <main className="flex-1 ml-80 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
