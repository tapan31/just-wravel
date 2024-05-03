import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [username, setUserName] = useState("atuny0");
  const [password, setPassword] = useState("9uQFF1Lh");
  const [isLoading, setIsLoading] = useState(false);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        login(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  function getFakeCredentials() {
    setUserName("atuny0");
    setPassword("9uQFF1Lh");
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <p className="text-sm text-red-500">
          Note: Do not change the email and password, as it is a dummy login api
        </p>
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLoading ? "Please wait..." : "Sign in"}
          </button>
          <button
            onClick={getFakeCredentials}
            className="mt-3 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get Dummy Credentials
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
