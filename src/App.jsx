import Navbar from "./components/Navbar";
import PopulationPage from "./pages/main/PopulationPage";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="px-0 mx-0 pt-20">
        <PopulationPage />
      </section>
    </main>
  );
}

export default App;
