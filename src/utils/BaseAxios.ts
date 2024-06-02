import axios, { AxiosInstance } from "axios";

class AxiosClient {
  private client: AxiosInstance;
  static instance: AxiosClient;

  constructor() {
    console.log(process.env.API_URL);

    this.client = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  public static getInstance(): AxiosClient {
    if (!AxiosClient.instance) {
      AxiosClient.instance = new AxiosClient();
    }
    return AxiosClient.instance;
  }

  public async bearerRequest(
    route: string,
    token: string,
    method: "GET" | "POST" | "PUT" | "DELETE"
  ) {
    this.setToken(token);
    return await this.client.request({
      method,
      url: route,
    });
  }

  public async request(
    route: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: any
  ) {
    return await this.client.request({
      method,
      url: route,
      data,
    });
  }

  public async formDataRequest(
    route: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: FormData
  ) {
    return await this.client.request({
      method,
      url: route,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  private setToken(token: string) {
    this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  private removeToken() {
    delete this.client.defaults.headers.common["Authorization"];
  }
}

export default AxiosClient;
