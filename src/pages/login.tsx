import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    router.push('/');
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signOut } = useAuth();

  function onSubmit(e) {
    e.preventDefault();
    signIn({ email, password });
  }
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
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
