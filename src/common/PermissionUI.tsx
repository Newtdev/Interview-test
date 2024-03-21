import { forwardRef } from "react";

const UIPermissionRestrictor = forwardRef(function UIPermissionRestrictor(
  props: UIPermissionRestrictorProps,
  ref
) {
  const { permitted, disableInteraction, children, altChildren, ...rest } =
    props;

  const _children =
    permitted || disableInteraction
      ? typeof children === "function"
        ? children({ ref, ...rest })
        : children
      : null;

  if (permitted) {
    return _children;
  }

  if (disableInteraction) {
    return <div className="pointer-events-none contents">{_children}</div>;
  }

  return altChildren;
});

UIPermissionRestrictor.defaultProps = {
  permitted: false,
  disableInteraction: false,
  altChildren: null,
};

export default UIPermissionRestrictor;

export type UIPermissionRestrictorProps = {
  children?: any;
  permitted?: boolean;
  disableInteraction?: boolean;
  altChildren?: import("react").ReactNode;
};