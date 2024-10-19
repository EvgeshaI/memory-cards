export interface SignInBody {
  code: string;
  redirectUri: string;
}

export interface GetServiceIdResponse {
  service_id: string;
}
