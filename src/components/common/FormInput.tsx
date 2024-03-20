import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
}

export const FormInput = ({
  label,
  name,
  type,
  defaultValue,
}: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
};
