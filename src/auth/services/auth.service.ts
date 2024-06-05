import { ConfigServer } from "../../config/config";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { UserService } from "../../user/services/user.service";
import { UserEntity } from "../../user/entities/user.entity";
import { PayloadToken } from "../interfaces/auth.interface";

export class AuthService extends ConfigServer {
  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly jwtInstance = jwt
  ) {
    super();
  }

  public async validaterUser(
    username_user: string,
    password_user: string
  ): Promise<UserEntity | null> {
    const userByUsername = await this.userService.findUserbyUsername(
      username_user
    );
    if (userByUsername) {
      const isMatch = await bcrypt.compare(
        password_user,
        userByUsername.password_user
      );
      isMatch && userByUsername;
    }
    return null;
  }

  sing(payload: jwt.JwtPayload, secret: any) {
    return this.jwtInstance.sign(payload, secret);
  }

  public async generateJWT(
    user: UserEntity
  ): Promise<{ accessToken: string; user: UserEntity }> {
    const userConsult = await this.userService.findUserWithRole(
      user.id,
      user.role_user
    );

    const payload: PayloadToken = {
      role_user: userConsult!.role_user,
      sub: userConsult!.id,
    };

    if (userConsult) {
      user.password_user = "Not permision";
    }

    return {
      accessToken: this.sing(payload, this.getEnvironment("JWT_SECRET")),
      user,
    };
  }
}
