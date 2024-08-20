/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { LogoProps } from "./Logo";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<ViewProps>;
    "\u00A9 Copyright , Algomentor 2022"?: PrimitiveOverrideProps<TextProps>;
    Logo?: LogoProps;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
