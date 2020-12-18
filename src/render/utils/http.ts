import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../../config";

const instance = axios.create({
  baseURL: config.apiUrl,
});

function handleError(error: AxiosError): { error: AxiosError } {
  return { error };
}

instance.interceptors.response.use(undefined, handleError);

interface Response extends AxiosResponse {
  error?: AxiosError;
}

type Get = (url: string) => Promise<Response>;
type Post = (url: string, data: any) => Promise<Response>;

interface HttpProps {
  [key: string]: Get | Post;

  get: Get;
  post: Post;
}

const http: HttpProps = {
  get: instance.get,
  post: instance.post,
};

export default http;
