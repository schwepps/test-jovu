import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserRoleService } from "./userRole.service";
import { UserRoleControllerBase } from "./base/userRole.controller.base";

@swagger.ApiTags("userRoles")
@common.Controller("userRoles")
export class UserRoleController extends UserRoleControllerBase {
  constructor(
    protected readonly service: UserRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
