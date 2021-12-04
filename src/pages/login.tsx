import { useAuth } from '@/lib/auth';
import { useState } from 'react';

export default function LoginPage() {
  const { authToken } = useAuth();
  console.log(authToken);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signOut } = useAuth();

  function onSubmit(e) {
    e.preventDefault();
    signIn({ email, password });
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
