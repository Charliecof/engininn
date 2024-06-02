import AxiosClient from "../BaseAxios";
import { Room } from "../EngineInterfaces";

class EngineAPI {
  private client: AxiosClient;
  static instance: EngineAPI;

  constructor() {
    this.client = AxiosClient.getInstance();
  }

  public static getInstance(): EngineAPI {
    if (!EngineAPI.instance) {
      EngineAPI.instance = new EngineAPI();
    }
    return EngineAPI.instance;
  }

  public async createRoom(data: Room) {
    return await this.client.request("/rooms/create", "POST", data);
  }
}

export default EngineAPI;
