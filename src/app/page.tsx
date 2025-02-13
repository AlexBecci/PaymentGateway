'use client';

import { CreatePayment } from "./components/create-payment";
import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <div>
      <ModuleMain />
    </div>
  );
}

function ModuleMain() {

  return (
    <div className="tracking-wide  ">
      <MainLayout>
        <CreatePayment />
      </MainLayout>
    </div>
  );
}

