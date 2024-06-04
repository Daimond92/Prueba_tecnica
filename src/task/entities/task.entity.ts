import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { StatusType } from "../dto/task.dto";

@Entity({ name: "task" })
export class TaskEntity extends BaseEntity {
  @Column()
  title_task!: string;

  @Column()
  description_task!: string;

  @Column()
  due_date_task!: Date;

  @Column({ type: "enum", enum: StatusType, nullable: false })
  status_task!: StatusType;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;
}
