import { Injectable } from "@nestjs/common";
import { Strategy, ExtractJwt } from "passport-jwt"
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config"
import { UserService } from "src/auth/user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private userService: UserService) {
            super({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: true,
                secretOrKey: configService.get('JWT_SECRET')
            })
        }

        async validate({ id }: { id: string }) {
            return this.userService.getById(id)
        }
}