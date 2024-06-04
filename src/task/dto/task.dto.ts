import { IsNotEmpty, isNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { UserEntity } from "../../user/entities/user.entity";

export class TaskDTO extends BaseDTO {
  @IsNotEmpty()
  title_task!: string;

  @IsNotEmpty()
  description_task!: string;

  @IsNotEmpty()
  due_date_task!: Date;

  @IsNotEmpty()
  status_task!: string;

  @IsNotEmpty()
  user!: UserEntity;
}
