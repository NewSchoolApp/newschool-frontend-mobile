export interface Authentication {
  signIn: (data: Authentication.Params) => Promise<Authentication.Result>
}

export namespace Authentication {
  export type Params = {
    email: string;
    password: string;
  }

  export type Result = {
    token: string;
    signed: boolean
  }
}
