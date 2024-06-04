import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { TaskEntity } from "../../task/entities/task.entity";
import { Exclude } from "class-transformer";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @Column()
  name_user!: string;

  @Column()
  username_user!: string;

  @Exclude()
  @Column()
  password_user!: string;

  @Column()
  role_user!: string;

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks!: TaskEntity[];
}
