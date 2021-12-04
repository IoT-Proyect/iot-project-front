import { useState, useContext, createContext } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from '@apollo/client';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('authToken') : null
  );
  console.log('useProvideAuth', authToken);

  const isSignedIn = () => {
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };

  const getAuthHeaders = () => {
    if (!authToken) return null;

    return {
      authorization: `Bearer ${authToken}`,
    };
  };

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: 'http://localhost:8080/graphql',
      headers: getAuthHeaders(),
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  };

  const signIn = async ({ email, password }) => {
    const client = createApolloClient();
    const LoginMutation = gql`
      mutation{
          LoginUser(email: "${email}", password: "${password}") {
            email
            token
        }
      }
    `;

    const result = await client.mutate({
      mutation: LoginMutation,
    });

    console.log(result);

    if (result?.data?.LoginUser?.token) {
      setAuthToken(result.data.LoginUser.token);
      localStorage.setItem('authToken', result.data.LoginUser.token);
    }
  };

  const signOut = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
  };

  return {
    authToken,
    setAuthToken,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  };
}
