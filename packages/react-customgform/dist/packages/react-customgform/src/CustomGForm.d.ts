declare global {
    interface Window {
        CustomGForm: any;
    }
}
export type CustomGFormProps = {
    formId: string;
    mode?: 'standard' | 'popup';
    label?: string;
    inlineStyles?: string;
    [x: string]: any;
};
declare const CustomGForm: (props: CustomGFormProps) => import("react/jsx-runtime").JSX.Element;
export default CustomGForm;
