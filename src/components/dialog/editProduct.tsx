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
import { editProduct } from "@/lib/crud";
import { Product, Products } from "@/lib/definition";
import { formatRupiah, reverseFormatRupiah } from "@/lib/utils";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function EditProduct() {
  const { token, products, setProducts, id } = useAuth();

  const { register, handleSubmit, reset } = useForm<Product>({});

  const onSubmit: SubmitHandler<Product> = async (data) => {
    data.price = Number(data.price);

    const response = await editProduct(data, token, id);
    data.price = formatRupiah(data.price);
    const index = products.findIndex((prod) => prod.id === id);
    products[index] = data as Products;

    if (response) {
      setProducts([...products]);
      setTimeout(() => {
        toast.success(response?.message);
      }, 250);
      reset();
    }
  };

  useEffect(() => {
    const defaultProduct = products.find((prod) => prod.id === id) as Product;
    reset({
      id: id,
      name: defaultProduct?.name,
      price: reverseFormatRupiah(defaultProduct?.price),
      type: defaultProduct?.type,
    });
  }, [id, products, reset]);

  return (
    <Dialog>
      <DialogTrigger id="editProduct" className="hidden" asChild>
        <Button variant="outline"></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[478px] overflow-auto ">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="w-auto" action="">
          <label className="form-control mb-2 w-full hidden">
            <div className="label">
              <span className="label-text">Product name</span>
            </div>
            <input
              {...register("id")}
              type="number"
              className="input input-bordered w-full"
            />
          </label>
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
            <DialogClose className="mr-auto" asChild>
              <Button variant="cancel">cancel</Button>
            </DialogClose>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
