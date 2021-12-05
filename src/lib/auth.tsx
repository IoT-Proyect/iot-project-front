import { useState, useContext, createContext, useEffect } from 'react';
import { ApolloProvider, gql } from '@apollo/client';
import { apolloClient } from 'apolloClient';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <ApolloProvider client={auth.client}>{children}</ApolloProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
const lsAuthToken =
  typeof window !== 'undefined' && localStorage.getItem('authToken');

interface DecodedToken {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
}
function useProvideAuth() {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [authToken, setAuthToken] = useState(lsAuthToken || null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && user === null && authToken) {
      const { id, firstName, lastName, email }: DecodedToken =
        jwtDecode(authToken);
      setUser({ id, firstName, lastName, email });
    }
  }, [authToken]);

  const client = apolloClient;

  const signIn = async ({ email, password }) => {
    const LoginMutation = gql`
      mutation{
          LoginUser(email: "${email}", password: "${password}") {
            token
        }
      }
    `;

    const result = await client.mutate({
      mutation: LoginMutation,
    });

    if (result?.data?.LoginUser?.token) {
      setAuthToken(result.data.LoginUser.token);
      console.log('result', result);
      localStorage.setItem('authToken', result.data.LoginUser.token);
      console.log('auth tokeeeene', authToken);
      const { id, firstName, lastName, email }: DecodedToken = jwtDecode(
        result.data.LoginUser.token
      );
      setUser({ id, firstName, lastName, email });
      router.push('/');
    }
  };

  const signOut = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return {
    user,
    authToken,
    client,
    setAuthToken,
    signIn,
    signOut,
  };
}
