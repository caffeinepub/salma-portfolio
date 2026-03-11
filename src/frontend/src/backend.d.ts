export interface backendInterface {}
export interface ExternalBlob {
  getBytes(): Promise<Uint8Array>;
  onProgress?: (progress: number) => void;
  static fromURL(url: string): ExternalBlob;
}
export interface CreateActorOptions {
  agentOptions?: Record<string, unknown>;
}
export declare function createActor(
  canisterId: string,
  uploadFile: (file: ExternalBlob) => Promise<Uint8Array>,
  downloadFile: (bytes: Uint8Array) => Promise<ExternalBlob>,
  options?: CreateActorOptions,
): Promise<backendInterface>;
export declare class ExternalBlobClass implements ExternalBlob {
  getBytes(): Promise<Uint8Array>;
  onProgress?: (progress: number) => void;
  static fromURL(url: string): ExternalBlobClass;
}
