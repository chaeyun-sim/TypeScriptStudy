// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: 'Mike',
  nickname: 'mike',
  birth: "2022.02.02",
  bio: 'Hi!',
  location: 'chicago'
}

type CountryCodes = {
  [key : string] : string
}

let countryCodes : CountryCodes = {
  korea: 'ko',
  unitedState: 'us',
  unitedKingdom: 'uk'
}

type CountryNumbers = {
  [key: string] : number;
}

let countryNumberCodes : CountryNumbers = {}