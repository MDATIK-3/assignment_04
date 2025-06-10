import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import CreateImage from './Route/CreateImage';
import Downloaded from './Route/Downloaded';
import GenerateText from './Route/GenerateText';
import { AppProvider } from './context/AppContext';

function App() {
  const [route, setRoute] = useState('create');

  return (
    <AppProvider>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8 max-w-6xl relative">
          <Header route={route} setRoute={setRoute} />

          <div className="fixed -bottom-1/4 -right-0">
            <div className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px]"></div>
          </div>

          <main className="relative z-10 mt-8">
            {route === 'create' && <CreateImage />}
            {route === 'text' && <GenerateText />}
            {route === 'download' && <Downloaded />}
          </main>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </AppProvider>
  );
}

export default App;