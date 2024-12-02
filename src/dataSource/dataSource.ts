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
  emoji: string,
  continentCode: string
) {
  const country = new Country(code, name, emoji, continentCode);
  console.log("new test data added", country);
  await dataSource.manager.save(country);
}

export async function initTestData() {
  await CreateTestData("FR", "France", "🇫🇷", "EU");
  await CreateTestData("DE", "Germany", "🇩🇪", "EU");
  await CreateTestData("ES", "Spain", "🇪🇸", "EU");
  await CreateTestData("IT", "Italy", "🇮🇹", "EU");
  await CreateTestData("PT", "Portugal", "🇵🇹", "EU");
  await CreateTestData("BE", "Belgium", "🇧🇪", "EU");
  await CreateTestData("JP", "Japan", "🇯🇵", "AS");
  await CreateTestData("CN", "China", "🇨🇳", "AS");
  await CreateTestData("IN", "India", "🇮🇳", "AS");
  await CreateTestData("NG", "Nigeria", "🇳🇬", "AF");
  await CreateTestData("ZA", "South Africa", "🇿🇦", "AF");
  await CreateTestData("EG", "Egypt", "🇪🇬", "AF");
  await CreateTestData("KE", "Kenya", "🇰🇪", "AF");
}
