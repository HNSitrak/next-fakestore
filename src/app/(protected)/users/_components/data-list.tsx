'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IUser } from '../page';

const DataList = ({ data, onClickItem }: { data?: IUser[], onClickItem: (id: number) => void }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map(user => (
          <Card key={`user_${user.id}`} className="hover:bg-gray-100 hover:cursor-pointer" onClick={() => onClickItem(user.id)}>
            <CardHeader>
              <CardTitle>{user.name.firstname} {user.name.lastname}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Username: {user.username}</p>
              <p>Phone: {user.phone}</p>
              <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            </CardContent>
          </Card>
        ))}
      </div>
  );
};

export default DataList;
