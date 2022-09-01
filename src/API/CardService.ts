import axios from 'axios';
import {ICountry, ICountryExtend} from '../types/types';

export default class CardService {
    static async getAll() {
        const response = await axios.get<ICountry[]>('https://restcountries.com/v3.1/all');

        return response.data;
    }

    static async getCustom() {
        const customCountriesData = await this.getAll();

        return customCountriesData.map((country: any) => ({
            id: country.cca2,
            flagUrl: country.flags.svg,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital,
            borders: country.borders
        }));
    }

    static async getById(id:string | undefined) {
        const response = await axios.get<ICountryExtend[]>(`https://restcountries.com/v3.1/alpha?codes=${id}`);

        return response.data.map((country: any) => ({
            id: country.cca2,
            flagUrl: country.flags.svg,
            name: country.name.common,
            nativeName: Object.values<{ official: string }>(country.name.nativeName)[0].official,
            population: country.population,
            region: country.region,
            capital: country.capital,
            borders: country.borders,
            subregion: country.subregion,
            topLevelDomain: country.tld,
            currencies: Object.values<{ name: string }>(country.currencies)[0].name,
            languages: Object.values(country.languages)
        }));
    }
}