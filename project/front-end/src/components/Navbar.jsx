import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSlice'

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const cartCount = useSelector(selectCartCount)

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 shrink-0">
          ShopZone
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md hidden sm:flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg text-sm hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </form>

        {/* Desktop nav links */}
        <div className="hidden sm:flex items-center gap-5 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/cart" className="hover:text-indigo-600 transition flex items-center gap-1 relative">
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/profile" className="hover:text-indigo-600 transition">Profile</Link>
          <Link to="/login" className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition">
            Login / Signup
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-700 border-t">
          <form onSubmit={handleSearch} className="flex mt-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button type="submit" className="bg-indigo-600 text-white px-3 py-2 rounded-r-lg">
              Go
            </button>
          </form>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Home</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">🛒 Cart</Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Profile</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="text-indigo-600 font-semibold">Login / Signup</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
