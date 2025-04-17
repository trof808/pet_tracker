// Также можно описать стандартные ошибки, которые будет возвращать твой request client

export type RequestConfig = {
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
};

export type ApiClient = {
  get: <T>(url: string, config?: RequestConfig) => Promise<T>;
  post: <T>(url: string, data?: unknown, config?: RequestConfig) => Promise<T>;
  // put: <T>(url: string, data?: unknown, config?: RequestConfig) => Promise<T>;
  // delete: <T>(url: string, config?: RequestConfig) => Promise<T>;
};
