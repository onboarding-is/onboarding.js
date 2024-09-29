interface WindowWithOnboarding extends Window {
  onboarding?: Onboarding
}

export interface Onboarding {
  init: (token: string) => void
  identify: (
    userId: string,
    attributes?: Attributes,
    opts?: IdentifyOptions
  ) => Promise<void>
}

export type Attributes = Record<string, AttributeLiteralOrList | AttributeChange>;

type AttributeLiteral = string | number | boolean | null | undefined
type AttributeLiteralOrList = AttributeLiteral | AttributeLiteral[]

interface AttributeChange {
  set?: AttributeLiteralOrList
  set_once?: AttributeLiteralOrList
  add?: string | number
  subtract?: string | number
  append?: AttributeLiteralOrList
  prepend?: AttributeLiteralOrList
  remove?: AttributeLiteralOrList
  data_type?: AttributeDataType
}

type AttributeDataType = 'string' | 'boolean' | 'number' | 'datetime' | 'list'

export type IdentifyOptions = {
  signature?: string
}

var w: WindowWithOnboarding = typeof window === 'undefined' ? ({} as any) : window;
var onboarding = w.onboarding;
if (!onboarding) {
  onboarding = w.onboarding = {
    init: () => {},
    identify: () => Promise.resolve(),
  } as Onboarding;
}

export default onboarding!
