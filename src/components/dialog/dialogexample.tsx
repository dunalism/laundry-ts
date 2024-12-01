import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useAuth } from "@/lib/AuthProvider";
import { addProduct } from "@/lib/crud";
import { Product } from "@/lib/definition";
import { SubmitHandler, useForm } from "react-hook-form";

export function DialogDemo() {
  const { token, products, setProducts } = useAuth();

  const { register, handleSubmit, reset } = useForm<Omit<Product, "id">>({
    mode: "onTouched", //tidak digunakan
  });

  const onSubmit: SubmitHandler<Omit<Product, "id">> = async (data) => {
    data.price = Number(data.price);
    const response = await addProduct(data, token);
    // console.log("data", data);
    setProducts([...products, response]);
    reset();
  };
  return (
    <Dialog>
      <DialogTrigger id="dialogex" className="hidden" asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[478px] overflow-auto ">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="w-auto" action="">
          <label className="form-control mb-2 w-full">
            <div className="label">
              <span className="label-text">Product name</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Cuci aja"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control mb-2 w-full">
            <div className="label">
              <span className="label-text">Product price</span>
            </div>
            <input
              {...register("price")}
              type="number"
              placeholder="10000"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control mb-2 w-full">
            <div className="label">
              <span className="label-text">Product type</span>
            </div>
            <select
              {...register("type")}
              className="select select-bordered w-full mb-3"
              required
            >
              <option selected>Per Kg</option>
              <option>Per Pcs</option>
              <option>Per Pasang</option>
            </select>
          </label>

          <DialogFooter className="flex  flex-row">
            <DialogClose id="add-product" className="mr-auto" asChild>
              <Button variant="cancel">cancel</Button>
            </DialogClose>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
