'use client';

import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import DataList from './_components/data-list';
import ListSkeleton from './_components/list-skeleton';

interface IName {
  firstname: string;
  lastname: string;
};
interface IAddress {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
};
export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: IName;
  address: IAddress;
  phone: string;
}

export default function UsersPage() {
  const router =  useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<IUser[]>  => {
      const res = await api.get("/users");
      return res;
    },
  })

  if (isLoading) {
    return <ListSkeleton />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <DataList data={data} onClickItem={(id) => router.push(`/users/${id}`)} />
    </div>
  );
}
