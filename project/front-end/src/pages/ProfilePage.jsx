import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth } from '../context/Authcontext'
import { setUser } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProfilePage = () => {
  const { user, isLoggedIn } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState(user?.username || '')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-500 gap-4">
        <span className="text-6xl">👤</span>
        <h2 className="text-2xl font-semibold">You're not logged in</h2>
        <button
          onClick={() => navigate('/login')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition text-sm"
        >
          Login
        </button>
      </div>
    )
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      const res = await axios.put(
        `http://localhost:5000/api/auth/update/${user.id}`,
        { username },
        { withCredentials: true }
      )
      dispatch(setUser({ ...user, username: res.data.user.username }))
      setSuccess('Username updated successfully.')
    } catch (err) {
      setError(err.response?.data?.message || 'Update failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const joinedAt = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'N/A'

  // generate avatar initials
  const initials = user?.username?.slice(0, 2).toUpperCase() || '??'

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center gap-6">

        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow">
          {initials}
        </div>

        {/* User info */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">{user.username}</h2>
          <p className="text-sm text-gray-500 mt-1">{user.email}</p>
          <p className="text-xs text-gray-400 mt-1">Joined: {joinedAt}</p>
        </div>

        <hr className="w-full border-gray-100" />

        {/* Update form */}
        <form onSubmit={handleUpdate} className="w-full flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">Update Profile</h3>

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-600 text-sm px-4 py-2 rounded">
              {success}
            </div>
          )}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2 rounded">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={2}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 font-medium">Email (cannot be changed)</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={loading || username === user.username}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage
