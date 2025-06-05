'use client';

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const ViewAllProductsButton = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center my-8">
      <Button
        onClick={() => router.push('/search')}
        className="px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600 transition-colors duration-200"
      >
        View All Products
      </Button>
    </div>
  );
};

export default ViewAllProductsButton;