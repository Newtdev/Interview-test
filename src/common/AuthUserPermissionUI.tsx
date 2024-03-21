import useAuthUserPermissionRestrictor from "hooks/useAuthUserPermissionRestrictor";
import { forwardRef } from "react";
import PermissionUI from "./PermissionUI";

const AuthUserPermissionUI = forwardRef(function AuthUserUIPermissionRestrictor(
  props: AuthUserUIPermissionRestrictorProps,
  ref
) {
  const { permissions, negateValidation, validateAll, ...rest } = props;
  const permissionValidator = useAuthUserPermissionRestrictor();

  const permitted = validateAll
    ? negateValidation
      ? !permissionValidator.hasPermissions(permissions)
      : permissionValidator.hasPermissions(permissions)
    : negateValidation
    ? !permissionValidator.hasPermission(permissions)
    : permissionValidator.hasPermission(permissions);

  return <PermissionUI {...{ ref, ...rest, permitted }} />;
});

AuthUserPermissionUI.defaultProps = {
  permissions: [],
};

export default AuthUserPermissionUI;

export type AuthUserUIPermissionRestrictorProps = {
  permissions?: string[];
  validateAll?: boolean;
  negateValidation?: boolean;
} & Omit<import("./PermissionUI").UIPermissionRestrictorProps, "permitted">;
