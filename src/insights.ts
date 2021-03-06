export class Insights {
  constructor (private _http: Typeform.HTTPClient) { }
  
  public retrieve (
    args: {
      uid: string
    }
  ): Promise<any> {
    const { uid } = args

    return this._http.request({
      method: 'get',
      url: `/insights/${uid}/summary`,
    })
  }
}
