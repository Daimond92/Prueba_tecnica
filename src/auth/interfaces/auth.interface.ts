import { RoleType } from "../../user/dto/user.dto";

export interface PayloadToken {
  role_user: RoleType;
  sub: string;
}
