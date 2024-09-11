export const msalConfig = {
  auth: {
    clientId: '41a51533-79e9-4088-b6e2-41c8972d7de5', 
    authority: 'https://trackexpense.b2clogin.com/trackexpense.onmicrosoft.com/B2C_1_expense_tracker', 
    knownAuthorities: ['trackexpense.b2clogin.com'], 
    redirectUri: 'http://localhost:3000/', 
    postLogoutRedirectUri: 'http://localhost:3000/', 
    navigateToLoginRequestUrl: false, 
  },
  cache: {
    cacheLocation: 'sessionStorage', 
    storeAuthStateInCookie: false, 
  }
}