declare global {
    interface Window {
        CustomGForm: any;
    }
}
export type CustomGFormProps = {
    formId: string;
    [x: string]: any;
};
declare const CustomGForm: (props: CustomGFormProps) => import("react/jsx-runtime").JSX.Element;
export default CustomGForm;
