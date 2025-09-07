// import { ReactNode } from "react";

import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  children: ReactNode;
}

export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      {children}
    </div>
  );
}
