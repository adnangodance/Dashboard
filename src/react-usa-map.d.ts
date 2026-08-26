declare module "react-usa-map" {
  import type { ComponentType } from "react";

  type StateConfig = {
    fill?: string;
    clickHandler?: (event: unknown) => void;
  };

  type USAMapProps = {
    title?: string;
    width?: number;
    height?: number;
    defaultFill?: string;
    customize?: Record<string, StateConfig>;
    onClick: (event: any) => void;
  };

  const USAMap: ComponentType<USAMapProps>;
  export default USAMap;
}
