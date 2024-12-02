import { Query, Resolver } from "type-graphql";

import { dataSource } from "../../../dataSource/dataSource";
import { Country } from "../../Entities/Country";
@Resolver(Country)
export class CountryQueries {
  @Query((type) => [Country])
  async getAllCountrys(): Promise<Country[]> {
    const countrys: Country[] = await dataSource.manager.find(Country);
    return countrys;
  }
}
