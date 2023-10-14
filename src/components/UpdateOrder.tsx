import { useFetcher } from "react-router-dom";
import Button from "./Button";
import type { ActionFunction } from "react-router-dom";
import { updateOrder } from "../utils/helper";
const UpdateOrder = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  console.log("isSubmitting", isSubmitting);
  return (
    <fetcher.Form method="PATCH">
      <Button
        text="Make Priority"
        disabled={isSubmitting}
        css={isSubmitting ? "opacity-60 hover:scale-100 hover:opacity-60" : " "}
      />
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const action: ActionFunction = async ({ params }) => {
  const { id } = params;
  await updateOrder(id as string, { priority: true });
  return null;
};
