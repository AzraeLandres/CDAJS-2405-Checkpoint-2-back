import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;

  @Column({ nullable: true })
  continentCode: string;

  constructor(
    code: string,
    name: string,
    emoji: string,
    continentCode: string
  ) {
    super();
    this.code = code;
    this.name = name;
    this.emoji = emoji;
    this.continentCode = continentCode;
  }
}
