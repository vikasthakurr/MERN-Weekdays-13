import { useState } from 'react'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
