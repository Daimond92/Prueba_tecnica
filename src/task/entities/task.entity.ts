import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity({ name: "task" })
export class TaskEntity extends BaseEntity {
  @Column()
  title_task!: String;

  @Column()
  description_task!: String;

  @Column()
  due_date_task!: Date;

  @Column()
  status_task!: String;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;
}
