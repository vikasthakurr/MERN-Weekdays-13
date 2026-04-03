import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart, selectCartTotal } from '../store/cartSlice'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const total = useSelector(selectCartTotal)
  const [processing, setProcessing] = useState(false)
  const [form, setForm] = useState({
    fullName: '', address: '', city: '', zip: '',
    cardNumber: '', expiry: '', cvv: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setProcessing(true)
    setTimeout(() => {
      dispatch(clearCart())
      navigate('/', { state: { paymentSuccess: true } })
    }, 5000)
  }

  if (processing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-lg font-semibold text-gray-700">Processing your payment...</p>
        <p className="text-sm text-gray-400">Please don't close this page</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Delivery Address */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <h2 className="font-semibold text-gray-700 text-base">Delivery Address</h2>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            placeholder="Street Address"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="flex gap-3">
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              placeholder="City"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              name="zip"
              value={form.zip}
              onChange={handleChange}
              required
              placeholder="ZIP Code"
              className="w-32 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <h2 className="font-semibold text-gray-700 text-base">Payment Details</h2>
          <input
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            required
            placeholder="Card Number (16 digits)"
            maxLength={16}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="flex gap-3">
            <input
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              maxLength={5}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              required
              placeholder="CVV"
              maxLength={3}
              className="w-28 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Order total + submit */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Order Total</p>
            <p className="text-xl font-bold text-indigo-600">${total}</p>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutPage
