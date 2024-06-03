import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @Column()
  name_user!: string;

  @Column()
  username_user!: string;

  @Column()
  password_user!: string;

  @Column()
  role_user!: string;
}
