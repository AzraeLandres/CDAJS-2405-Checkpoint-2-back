import { dataSource } from "../../../dataSource/dataSource";
import { Country } from "../../Entities/Country";
import { Mutation, Arg, InputType, Field, Resolver } from "type-graphql";

@Resolver(Country)
export class CountryMutations {
  @Mutation((_) => Country)
  async createCountry(
    @Arg("code", { nullable: true }) code: string,
    @Arg("name") name: string,
    @Arg("emoji", { nullable: true }) emoji: string
  ): Promise<Country> {
    try {
      const newCountry = new Country(code, name, emoji);
      await dataSource.manager.save(newCountry);
      return newCountry;
    } catch (error) {
      console.info(error);
      throw new Error("Invalid information");
    }
  }
}
