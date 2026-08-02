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
import BlogPostPage from './pages/BlogPostPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import { AdminAuthProvider } from './admin/context/AdminAuthContext.jsx'
import RequireAuth from './admin/components/RequireAuth.jsx'
import AdminLayout from './admin/components/AdminLayout.jsx'
import AdminLoginPage from './admin/pages/AdminLoginPage.jsx'
import AdminDashboardPage from './admin/pages/AdminDashboardPage.jsx'
import AdminVehiclesPage from './admin/pages/AdminVehiclesPage.jsx'
import AdminVehicleFormPage from './admin/pages/AdminVehicleFormPage.jsx'
import AdminBlogPage from './admin/pages/AdminBlogPage.jsx'
import AdminBlogFormPage from './admin/pages/AdminBlogFormPage.jsx'

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
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      </Route>

      <Route path="admin" element={<AdminAuthProvider />}>
        <Route path="login" element={<AdminLoginPage />} />
        <Route element={<RequireAuth />}>
          <Route element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="vehicles" element={<AdminVehiclesPage />} />
            <Route path="vehicles/new" element={<AdminVehicleFormPage />} />
            <Route path="vehicles/:id" element={<AdminVehicleFormPage />} />
            <Route path="blog" element={<AdminBlogPage />} />
            <Route path="blog/new" element={<AdminBlogFormPage />} />
            <Route path="blog/:id" element={<AdminBlogFormPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
