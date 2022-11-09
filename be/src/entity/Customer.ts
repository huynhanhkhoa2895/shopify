export type Address = {
  id: string,
  address: string,
  address2: string,
  city?: string,
  zip?: string,
  company?: string
}

export type Image = {
  id: string,
  width: string,
  height: string,
  url: string,
  altText?: string
}

export type Customer = {
  id : string
  token : string
  firstName: string
  lastName: string
  phone: string
  displayName?: string
  note?: string
  verifiedEmail?: boolean | null
  images?: Address
  addresses? : Address[]
}