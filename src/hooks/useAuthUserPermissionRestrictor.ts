import useOrganization from "hooks/useOrganization";
import useAuthUser from "hooks/useAuthUser";
import { OrganizeImportsMode } from "typescript";
import usePermissionRestrictor from "./usePermissionRestrictor";

function useAuthUserPermissionRestrictor() {
  const { organization } = useOrganization();
  return usePermissionRestrictor([
    ...(organization?.role ? [organization?.role] : []),
  ]);
}

export default useAuthUserPermissionRestrictor;
