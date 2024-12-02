import { Arg, Query, Resolver } from "type-graphql";

import { dataSource } from "../../../dataSource/dataSource";
import { Country } from "../../Entities/Country";

@Resolver(Country)
export class CountryQueries {
  @Query((type) => [Country])
  async getAllCountrys(): Promise<Country[]> {
    const countrys: Country[] = await dataSource.manager.find(Country);
    return countrys;
  }

  @Query((type) => Country)
  async getCountryByCode(@Arg("code") code: string): Promise<Country | null> {
    const country: Country | null = await dataSource.manager.findOne(Country, {
      where: { code: code },
    });
    if (!country) {
      throw new Error("Country not found");
    }

    return country;
  }

  @Query((type) => [Country])
  async getCountrysByContinentCode(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    const countrys: Country[] = await dataSource.manager.find(Country, {
      where: { continentCode: continentCode },
    });
    return countrys;
  }
}
