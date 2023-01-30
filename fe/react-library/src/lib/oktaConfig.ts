export const oktaConfig = {
	clientId: '0oa857uxpbd569jzV5d7',
	issuer: 'https://dev-83385947.okta.com/oauth2/default',
	redirectUri: 'http://localhost:3000/login/callback',
	scopes: ['openid', 'profile', 'email'],
	pkce: true,
	disableHttpsCheck: true,
}