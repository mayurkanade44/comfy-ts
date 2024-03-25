import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}

interface SelectProductAmountProps {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

interface SelectCardItemAmountProps {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => void;
}

export const SelectProductAmount = ({
  mode,
  amount,
  setAmount,
}: SelectProductAmountProps | SelectCardItemAmountProps) => {
  const cartItem = mode === Mode.CartItem;
  return (
    <div>
      <h4 className="font-medium mb-2">Amount :</h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
      >
        <SelectTrigger className={cartItem ? "w-[75px]" : "w-[150px]"}>
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
            const selectValue = (index + 1).toString();
            return (
              <SelectItem key={index} value={selectValue}>
                {selectValue}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
