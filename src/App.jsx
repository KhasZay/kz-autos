import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import InventoryPage from './pages/InventoryPage.jsx'
import BuyCarPage from './pages/BuyCarPage.jsx'
import SellCarPage from './pages/SellCarPage.jsx'
import TradeInPage from './pages/TradeInPage.jsx'
import ImportOnRequestPage from './pages/ImportOnRequestPage.jsx'
import FinancingPage from './pages/FinancingPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import FleetSalesPage from './pages/FleetSalesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="buy-a-car" element={<BuyCarPage />} />
        <Route path="sell-your-car" element={<SellCarPage />} />
        <Route path="trade-in" element={<TradeInPage />} />
        <Route path="import-on-request" element={<ImportOnRequestPage />} />
        <Route path="financing" element={<FinancingPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="fleet-sales" element={<FleetSalesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
