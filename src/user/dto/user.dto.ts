import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class UserDTO extends BaseDTO {
  @IsNotEmpty()
  name_user!: string;

  @IsNotEmpty()
  username_user!: string;

  @IsNotEmpty()
  password_user!: string;

  @IsNotEmpty()
  role_user!: RoleType;
}

export enum RoleType {
  USER = "Usuario",
  ADMIN = "Administrador",
}
