import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SonnerComponent = () => {
  return (
    <>
      <main className="h-full w-full flex flex-col justify-center items-center gap-5 bg-[#ffffff]  border my-4 p-4">
        <h1 className="text-5xl text-center my-6 text-gray-700">
          Sonner & Switch
        </h1>
        <Button
          variant="outline"
          onClick={() =>
            toast("Hello World", {
              description: "This Is a Tost From Shadcn",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
        <div className="flex items-center space-x-2 bg-gray-400 p-5 rounded-2xl">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </main>
    </>
  );
};

export default SonnerComponent;
