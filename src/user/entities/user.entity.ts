import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { TaskEntity } from "../../task/entities/task.entity";
import { Exclude } from "class-transformer";
import { RoleType } from "../dto/user.dto";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @Column()
  name_user!: string;

  @Column()
  username_user!: string;

  @Exclude()
  @Column()
  password_user!: string;

  @Column({ type: "enum", enum: RoleType, nullable: false })
  role_user!: RoleType;

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks!: TaskEntity[];
}
