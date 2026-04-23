/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV?: "local" | "dev" | "prod";
  readonly VITE_BASE_API_URL?: string;
  readonly VITE_API_VERSION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
