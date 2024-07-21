// src/components/components.jsx
import React from "react";
import { Card, CardContent } from "./ui/card"; // 경로를 상대 경로로 수정

// 아이콘 컴포넌트들
function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function Component() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden w-64 flex-col border-r bg-[#f0f0f0] p-6 sm:flex">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Package2Icon className="h-6 w-6 fill-[#8d8d8d]" />
          <span className="text-[#8d8d8d]">Acme Inc</span>
        </a>
        <nav className="mt-8 flex flex-col space-y-1">
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#8d8d8d] transition-colors hover:bg-[#e0e0e0] hover:text-[#6d6d6d]"
          >
            <HomeIcon className="h-5 w-5 fill-[#8d8d8d]" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#8d8d8d] transition-colors hover:bg-[#e0e0e0] hover:text-[#6d6d6d]"
          >
            <LayoutGridIcon className="h-5 w-5 fill-[#8d8d8d]" />
            Products
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#8d8d8d] transition-colors hover:bg-[#e0e0e0] hover:text-[#6d6d6d]"
          >
            <ShoppingCartIcon className="h-5 w-5 fill-[#8d8d8d]" />
            Orders
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#8d8d8d] transition-colors hover:bg-[#e0e0e0] hover:text-[#6d6d6d]"
          >
            <UsersIcon className="h-5 w-5 fill-[#8d8d8d]" />
            Customers
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#8d8d8d] transition-colors hover:bg-[#e0e0e0] hover:text-[#6d6d6d]"
          >
            <LineChartIcon className="h-5 w-5 fill-[#8d8d8d]" />
            Analytics
          </a>
        </nav>
      </aside>
      <div className="flex-1 p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="bg-[#f5f5f5]">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                Product Name
              </h3>
              <p className="text-sm text-[#8d8d8d]">
                A short description of the product.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#f5f5f5]">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                Product Name
              </h3>
              <p className="text-sm text-[#8d8d8d]">
                A short description of the product.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#f5f5f5]">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                Product Name
              </h3>
              <p className="text-sm text-[#8d8d8d]">
                A short description of the product.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#f5f5f5]">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                Product Name
              </h3>
              <p className="text-sm text-[#8d8d8d]">
                A short description of the product.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#f5f5f5]">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                Product Name
              </h3>
              <p className="text-sm text-[#8d8d8d]">
                A short description of the product.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#f5f5f5]">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                Product Name
              </h3>
              <p className="text-sm text-[#8d8d8d]">
                A short description of the product.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#f5f5f5]">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                Product Name
              </h3>
              <p className="text-sm text-[#8d8d8d]">
                A short description of the product.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#f5f5f5]">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                Product Name
              </h3>
              <p className="text-sm text-[#8d8d8d]">
                A short description of the product.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
