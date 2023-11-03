export type symbolType = {
  symbol: string,
  full_name: string,
  description: string,
  exchange: string,
  type: string,
}

export type periodParamsType = {
  symbol: string,
  resolution: string,
  from: number,
  to: number,
  'firstDataRequest'?: boolean,
}

export type parsedSymbolType = {
  exchange: string,
  fromSymbol: string,
  toSymbol: string,
}