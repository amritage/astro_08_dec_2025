const RAW_API_BASE =
  import.meta.env.PUBLIC_API_BASE_URL ??
  import.meta.env.NEXT_PUBLIC_API_BASE_URL ??
  import.meta.env.API_BASE_URL ??
  "https://test.amrita-fashions.com/api";

export const API_BASE_URL = RAW_API_BASE.replace(/\/+$/, "");

export const apiUrl = (path: string): string => {
  const normalized = String(path ?? "").replace(/^\/+/, "");
  if (!normalized) return API_BASE_URL;
  return `${API_BASE_URL}/${normalized}`;
};
