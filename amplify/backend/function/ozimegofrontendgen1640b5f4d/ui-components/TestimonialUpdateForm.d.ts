/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Testimonial } from "../src/API.ts";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestimonialUpdateFormInputValues = {
    name?: string;
    avatar?: string;
    testimony?: string;
};
export declare type TestimonialUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    testimony?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialUpdateFormOverridesProps = {
    TestimonialUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    testimony?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestimonialUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestimonialUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testimonial?: Testimonial;
    onSubmit?: (fields: TestimonialUpdateFormInputValues) => TestimonialUpdateFormInputValues;
    onSuccess?: (fields: TestimonialUpdateFormInputValues) => void;
    onError?: (fields: TestimonialUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestimonialUpdateFormInputValues) => TestimonialUpdateFormInputValues;
    onValidate?: TestimonialUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestimonialUpdateForm(props: TestimonialUpdateFormProps): React.ReactElement;
