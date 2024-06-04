import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { TaskEntity } from "../../task/entities/task.entity";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @Column()
  name_user!: String;

  @Column()
  username_user!: String;

  @Column()
  password_user!: String;

  @Column()
  role_user!: String;

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks!: TaskEntity[];
}
