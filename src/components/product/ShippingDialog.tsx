"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function ShippingDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" className="px-0 text-blue-600 text-sm">
          Calcular frete
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-medium">Calcular frete</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon">
                <Cross2Icon />
              </Button>
            </Dialog.Close>
          </div>
          <input
            type="text"
            placeholder="Digite seu CEP"
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
