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
import { editUsers } from "@/lib/crud";
import { UsersData } from "@/lib/definition";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function EditUsers() {
  const { token, users, setUsers, id } = useAuth();

  const { register, handleSubmit, reset } = useForm<UsersData>({});

  const onSubmit: SubmitHandler<UsersData> = async (data) => {
    const response = await editUsers(data, token, id);
    const index = users.findIndex((user) => user.id === id);
    users[index] = data as UsersData;

    if (response) {
      setUsers([...users]);
      setTimeout(() => {
        toast.success(response?.message);
      }, 250);
      reset();
    }
  };

  useEffect(() => {
    const defaultUsers = users.find((user) => user.id === id) as UsersData;
    reset({
      id: id,
      name: defaultUsers?.name,
      username: defaultUsers?.username,
      email: defaultUsers?.email,
      role: defaultUsers?.role,
      createdAt: defaultUsers?.createdAt,
    });
  }, [id, users, reset]);

  return (
    <Dialog>
      <DialogTrigger id="editUsers" className="hidden" asChild>
        <Button variant="outline"></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[478px] overflow-auto ">
        <DialogHeader>
          <DialogTitle>Edit Users</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="w-auto" action="">
          <label className="form-control mb-2 w-full hidden">
            <div className="label">
              <span className="label-text">id tersembunyi</span>
            </div>
            <input
              {...register("id")}
              type="number"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control mb-2 w-full hidden">
            <div className="label">
              <span className="label-text">createdAt</span>
            </div>
            <input
              {...register("createdAt")}
              type="number"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control mb-2 w-full">
            <div className="label">
              <span className="label-text">Full name</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Joko Subianto"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control mb-2 w-full">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              {...register("username")}
              type="text"
              placeholder="jokosu"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control mb-2 w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              {...register("email")}
              type="email"
              placeholder="jokosu@mail.com"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control mb-2 w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              {...register("password")}
              type="password"
              placeholder="********"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control mb-2 w-full">
            <div className="label">
              <span className="label-text">Role</span>
            </div>
            <select
              {...register("role")}
              className="select select-bordered w-full mb-3"
              required
            >
              <option selected>user</option>
              <option>admin</option>
              <option>owner</option>
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
