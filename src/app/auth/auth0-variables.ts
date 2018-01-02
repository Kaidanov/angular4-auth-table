interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'MPPKHpxO23UHro8rCuW4Q0WbaID28iec',
  domain: 'here4u.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
