import { IChildren } from "@/shared/types";
import { MUIProvider } from "./MUIProvider";

export const Providers = ({ children }: IChildren) => {
  return <MUIProvider>{children}</MUIProvider>;
};
