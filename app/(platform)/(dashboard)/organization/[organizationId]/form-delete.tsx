"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

const FormDeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="destructive" size="sm" disabled={pending}>
      {pending && (
        <Loader2
          className="mr-2 h-4 w-4 animate-spin
      "
        />
      )}
      Delete
    </Button>
  );
};

export default FormDeleteButton;
