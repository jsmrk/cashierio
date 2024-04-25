import React from "react";
import { Button } from "@/components/ui/button";

type Props = {};

const Sales = (props: Props) => {
  return (
    <div className="text-primary text-3xl">
      CHAD CN BUTTON EXAMPLE{" "}
      <div>
        <Button variant="outline">Button</Button>
      </div>
    </div>
  );
};

export default Sales;
