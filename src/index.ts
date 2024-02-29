import axios, { AxiosError } from 'axios';

const URL = "https://prod-humantask.onrender.com/v0/tasks";

class HumanTaskError extends Error {}

interface IParams {
  [key: string]: any;
}

class HumanTask {
  private apiKey: string;

  constructor({ apiKey }: { apiKey?: string }) {
    if (!apiKey) {
      apiKey = process.env['HUMANTASK_API_KEY'];
    }
    if (!apiKey) {
      throw new Error("apiKey must be provided");
    }
    this.apiKey = apiKey;
  }

  public async run<T = any>(params: IParams): Promise<T> {
    if (Object.keys(params).length === 0) {
      throw new Error("Params must be provided");
    }

    const config = {
      headers: { Authorization: this.apiKey },
    };

    try {
      while (true) {
        const response = await axios.post(URL, params, config);
        if (response.data != null) {
          return response.data;
        } else {
          await new Promise(resolve => setTimeout(resolve, 30000));
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new HumanTaskError(error.message);
      } else {
        throw error;
      }
    }
  }
}

export default HumanTask;
