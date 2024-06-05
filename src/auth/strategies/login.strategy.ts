import { UserEntity } from "../../user/entities/user.entity";
import { AuthService } from "../services/auth.service";
import { PassportUse } from "../utils/passport.use";
import { Strategy as LocalStrategy, VerifyFunction } from "passport-local";

const authService: AuthService = new AuthService();

export class LoginStrategy {
  async validate(
    username_user: string,
    password_user: string,
    done: any
  ): Promise<UserEntity> {
    const user = await authService.validaterUser(username_user, password_user);
    if (!user) {
      return done(null, false, { message: "Invalid username or password" });
    }
    return done(null, user);
  }

  get use() {
    return PassportUse<LocalStrategy, Object, VerifyFunction>(
      "login",
      LocalStrategy,
      {
        usernameField: "username_user",
        passwordField: "password_user",
      },
      this.validate
    );
  }
}
