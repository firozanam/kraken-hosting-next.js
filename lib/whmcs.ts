import axios from "axios";
import https from "https";

const API_URL = process.env.API_ENDPOINT!;
const API_IDENTIFIER = process.env.API_IDENTIFIER!;
const API_SECRET = process.env.API_SECRET!;

interface WHMCSParams {
  [key: string]: string | number | boolean | undefined;
}

interface WHMCSResponse {
  result?: string;
  message?: string;
  [key: string]: string | number | boolean | object | undefined;
}

export const whmcsApi = async (
  action: string,
  params: WHMCSParams = {},
): Promise<WHMCSResponse> => {
  const postData = {
    identifier: API_IDENTIFIER,
    secret: API_SECRET,
    action: action,
    responsetype: "json",
    ...params,
  };

  try {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    };

    const response = await axios.post(
      API_URL,
      new URLSearchParams(postData).toString(),
      config,
    );

    const responseData = response.data as WHMCSResponse;

    if (responseData.result === "error") {
      throw new Error(responseData.message || "Unknown error occurred");
    }

    return responseData;
  } catch (error: unknown) {
    const typedError = error as {
      response?: { data: unknown };
      message: string;
    };
    const errorMessage = typedError.response?.data || typedError.message;
    console.error(`WHMCS API Error [${action}]:`, errorMessage);
    throw error;
  }
};
