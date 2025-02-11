'use client';

import { PaymentForm } from "./components/create-payment";
import { Modal } from "./components/Modal";

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
      <PaymentForm />
    </div>
  );
}

