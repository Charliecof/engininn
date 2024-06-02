import AxiosClient from "../BaseAxios";

class FileAPI {
  private client: AxiosClient;
  static instance: FileAPI;

  constructor() {
    this.client = AxiosClient.getInstance();
  }

  public static getInstance(): FileAPI {
    if (!FileAPI.instance) {
      FileAPI.instance = new FileAPI();
    }
    return FileAPI.instance;
  }

  public async uploadFile(data: FormData) {
    return await this.client.formDataRequest("/upload", "POST", data);
  }
}

export default FileAPI;
