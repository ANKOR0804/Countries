export interface ICountry {
    id: string;
    name: string;
    flagUrl: string;
    population: number;
    region: string;
    capital: string;
}

export interface ICountryExtend {
    id: string;
    name: string;
    nativeName: any;
    flagUrl: string;
    population: number;
    region: string;
    capital: string;
    borders: string[];
    subRegion: string;
    topLevelDomain: string | string[];
    currencies: string | string[];
    languages: string[];
}