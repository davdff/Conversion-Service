import { Navigation } from "./components/NavigationMenu/Navigation";
import { PromoSections } from "./components/Promo/PromoSections";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <div className="App_body">
      <Navigation />
      <PromoSections />
      <Footer />
    </div>
  );
}



