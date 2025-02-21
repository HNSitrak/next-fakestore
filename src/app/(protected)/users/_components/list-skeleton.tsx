'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';


const ListSkeleton = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"><Skeleton className='h-[28px] w-[150px] bg-gray-200' /></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 7}).map((_, index: number) => (
          <Card key={`listSkeleton_${index}`} className="animate-pulse">
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-[24px] w-[200px] bg-gray-200" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-[18px] w-[290px]" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p><Skeleton className="h-[20px] mt-2 w-[250px]" /></p>
              <p><Skeleton className="h-[20px] mt-2 w-[200px]" /></p>
              <p><Skeleton className="h-[20px] mt-2 w-[290px]" /></p>
              <p><Skeleton className="h-[20px] mt-2 w-[50px]" /></p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
};

export default ListSkeleton;
