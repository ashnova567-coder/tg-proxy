export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const targetUrl = new URL(url.pathname + url.search, 'https://api.telegram.org');
    
    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    return fetch(modifiedRequest);
  },
};