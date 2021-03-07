export interface HttpPostClient {
  post: <P extends any, R extends any>(data: P) => Promise<R>
}
