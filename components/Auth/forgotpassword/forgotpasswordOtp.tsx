export default function Otp() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                maxLength={6}
                placeholder="Enter the 6-digit code"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-center tracking-widest text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    );
  }
  