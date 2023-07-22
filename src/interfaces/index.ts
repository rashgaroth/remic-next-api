export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type RemicApiWrapper = {
  readonly methods: readonly HttpMethods[];
  readonly paginate: boolean;
};
