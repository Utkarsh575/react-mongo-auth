import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://react-mongo-auth-production.up.railway.app/router/login";
    const { data: res } = await axios.post(url, data);

    
    if (res.status === "error") {
      setError(res.error);
    } else {
      localStorage.setItem("token", res.data);
      localStorage.setItem("email",data.email);
      window.location = "/";
    }
  };
  return (
    <div className="bg-blue-400 flex flex-col h-[100vh] justify-center items-center text-center">
      <div className="flex flex-col justify-start rounded-lg bg-white 00 h-[30rem] w-[20rem] shadow-lg border-[1px] border-black">
        <h1 className="text-2xl mt-5 font-bold font-mono "> Login </h1>

        <form className="  mt-10 w-full  " onSubmit={handleSubmit}>
          <input
            className="w-5/6 p-2 rounded-sm border-2 border-black px-2 mx-auto "
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <input
            className="w-5/6 p-2 mt-5 rounded-sm border-2 border-black px-2 mx-auto "
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <button
            className="bg-green-400 px-7 py-3 mt-10 rounded-lg hover:border-2 hover:bg-green-500 border-black"
            type="submit"
          >
            Sign In
          </button>
          {error && (
            <div className="mt-5 text-red-500 font-semibold text-lg">
              {error}
            </div>
          )}
        </form>
        <div className="mt-2">
          <h1 className="text-sm font-semibold  mb-2 ">New Here ?</h1>
          <Link to="/signup">
            <button
              type="button"
              className="px-6 py-3 bg-blue-400 hover:bg-blue-500 border-black hover:border-2 rounded-lg"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
