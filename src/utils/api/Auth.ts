import AxiosClient from "../BaseAxios";
class AuthAPI {
  private client: AxiosClient;
  static instance: AuthAPI;

  constructor() {
    this.client = AxiosClient.getInstance();
  }

  public static getInstance(): AuthAPI {
    if (!AuthAPI.instance) {
      AuthAPI.instance = new AuthAPI();
    }
    return AuthAPI.instance;
  }

  public async login(email: string, password: string) {
    return await this.client.request("/auth/login", "POST", {
      email,
      password,
    });
  }

  public async register(email: string, password: string) {
    return await this.client.request("/auth/register", "POST", {
      email,
      password,
    });
  }

  public async logout() {
    return await this.client.request("/auth/logout", "POST");
  }
}

export default AuthAPI;
