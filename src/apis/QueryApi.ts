import { RootStates } from "./../store/store";
import {
  createApi,
  fetchBaseQuery,
  retry,
} from "@reduxjs/toolkit/dist/query/react";

import { Endpoints } from "constants/Endpoints";
import { RtkqTagEnum } from "constants/RtkqTagEnum";

import type { FetchArgs } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_KREXT_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootStates).global.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const staggeredBaseQueryWithBailOut = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    // if (result.error) {
    //   return result.error;
    // }

    return result;
  },
  {
    maxRetries: 0,
  }
);
interface CustomError {
  data: {
    message: string;
    stack: string;
  };
  status: number;
}
export const KrextQueryApi = createApi({
  reducerPath: "krextQueryApi",
  baseQuery: staggeredBaseQueryWithBailOut,
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "http://localhost:4009/api/v1",
  // }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  tagTypes: [] as any,
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (body) => ({
        url: Endpoints.LOGIN,
        method: "POST",
        body,
      }),
      providesTags: [{ type: RtkqTagEnum.AUTH_USER }] as any,
    }),
  }),
});
[KrextQueryApi].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(RtkqTagEnum) });
});

// /**
//  *
//  * @param {import("axios").AxiosRequestConfig} baseConfig
//  */
// export function axiosBaseQuery(baseConfig?: any) {
//   return request;

//   /**
//    *
//    * @param {import("axios").AxiosRequestConfig} config
//    */
//   async function request(config: any) {
//     const url = config.url
//       ? (baseConfig.url || "") + config.url
//       : baseConfig.url;

//     console.log("Requet URL", url);
//     try {
//       const response = await Http.request({ ...baseConfig, ...config, url });

//       return {
//         ...response,
//         data: response.data,
//         message: response.data?.message || null,
//         status: response.status || 200,
//         meta: { request: response.request, response },
//       };
//     } catch (error: any) {
//       return {
//         error: error.response
//           ? {
//               message: "",
//               status: error.response.status,
//               data: error.response.data,
//             }
//           : {
//               message: "Something went wrong",
//               data: { message: "Something went wrong" },
//             },
//       };
//     }
//   }
// }

interface ProvidesTagsOptions {
  selectId?: (data: any) => any;
}

interface InvalidatesTagsOptions {
  ids?: any[];
}

export function providesTags(
  resultsWithIds: any[],
  tagType: string,
  options: ProvidesTagsOptions = {}
) {
  const { selectId = ({ id }) => id } = options;
  const listTag = { type: tagType, id: "LIST" };
  const result = resultsWithIds
    ? [
        listTag,
        ...resultsWithIds.map((data) => ({
          type: tagType,
          id: selectId(data),
        })),
      ]
    : [listTag];

  return result;
}

export function invalidatesTags(
  tagType: string,
  options: InvalidatesTagsOptions = {}
) {
  const { ids = [] } = options;
  const result = [
    { type: tagType, id: "LIST" },
    ...ids.map((id) => ({ type: tagType, id })),
  ];

  return result;
}
