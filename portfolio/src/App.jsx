import './App.css';
import Contents from './components/Contents';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Header />
      <div className="mb-36 w-full px-6">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 sm:grid-cols-12">
          <main className="col-span-full flex flex-col gap-20">
            <Contents />
            <Profile />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
