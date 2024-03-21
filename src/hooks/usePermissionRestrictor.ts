import { normalizeArray } from "utils/utils";
import { useMemo } from "react";

function usePermissionRestrictor(defaultEntityPermissions = [] as any[]) {
  const normalizedDefaultEntityPermission = useMemo(
    () => normalizePermissions(defaultEntityPermissions) || {},
    [defaultEntityPermissions]
  );

  function resolveNormalizedPermissions(entityPermissions?: any[]) {
    return entityPermissions
      ? normalizePermissions(entityPermissions)
      : normalizedDefaultEntityPermission;
  }

  function hasPermission(permissions = [] as any[], entityPermissions?: any[]) {
    const resolvedNormalizedEntityPermissions =
      resolveNormalizedPermissions(entityPermissions);

    if (!permissions.length) {
      return true;
    }

    if (resolvedNormalizedEntityPermissions) {
      return permissions.some(
        (permission) => !!resolvedNormalizedEntityPermissions[permission]
      );
    }
    return false;
  }

  function hasPermissions(
    permissions = [] as any[],
    entityPermissions?: any[]
  ) {
    const resolvedNormalizedEntityPermissions =
      resolveNormalizedPermissions(entityPermissions);

    if (!permissions.length) {
      return true;
    }
    if (resolvedNormalizedEntityPermissions) {
      return permissions.every(
        (permission) => !!resolvedNormalizedEntityPermissions[permission]
      );
    }
    return false;
  }

  function filter(uis = [] as any[], options = {} as any) {
    const {
      getPermission = (ui: any) => ui?.permissions || [],
      isNegateValidation = (ui: any) => ui?.negatePermissionsValidation,
      isValidateAllPermissions = (ui: any) => ui?.validateAllPermissions,
    } = options;
    return uis.filter(function (...args: any[]) {
      const permissions = getPermission(...args);
      const negateValidation = isNegateValidation(...args);
      const validateAllPermissions = isValidateAllPermissions(...args);
      return validateAllPermissions
        ? negateValidation
          ? !hasPermissions(permissions)
          : hasPermissions(permissions)
        : negateValidation
        ? !hasPermission(permissions)
        : hasPermission(permissions);
    });
  }

  return { hasPermission, hasPermissions, filter };
}

export default usePermissionRestrictor;

function normalizePermissions(entityPermissions: any) {
  return normalizeArray(entityPermissions, {
    getKey: (key: any) => key,
    getValue: () => true,
  });
}
