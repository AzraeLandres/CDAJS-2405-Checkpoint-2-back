import { DataSource } from "typeorm";
import { Country } from "../db/Entities/Country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "countries.sqlite",
  entities: [Country],
  synchronize: true,
});

export async function CreateTestData(
  code: string,
  name: string,
  emoji: string
) {
  const country = new Country(code, name, emoji);
  console.log("new test data added", country);
  await dataSource.manager.save(country);
}

export async function initTestData() {
  await CreateTestData("FR", "France", "🇫🇷");
  await CreateTestData("DE", "Germany", "🇩🇪");
  await CreateTestData("ES", "Spain", "🇪🇸");
  await CreateTestData("IT", "Italy", "🇮🇹");
  await CreateTestData("PT", "Portugal", "🇵🇹");
  await CreateTestData("BE", "Belgium", "🇧🇪");
}
