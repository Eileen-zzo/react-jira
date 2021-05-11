import { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const Login = () => {
  const handleLogin = (params: { username: string; password: string }) => {
    fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    handleLogin({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usename">账号</label>
        <input type="text" id="usename"></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password"></input>
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
