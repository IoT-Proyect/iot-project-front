export const getAuthCookie = (cname?: string) => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
};
