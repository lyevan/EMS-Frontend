import React from "react";

const LoginForm = () => {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <div></div>

      <form
        className="form-control w-full max-w-xs flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Login
        </button>
      </form>
    </fieldset>
  );
};

export default LoginForm;
