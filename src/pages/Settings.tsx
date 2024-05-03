import { useProducts } from "@/services/queries";

const Settings = () => {
  const { data, isLoading, error, isError } = useProducts();

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : isError ? (
        <div>
          Error: {error.message || "An error occurred fetching inventory."}
        </div>
      ) : (
        <div>
          {data?.map((d) => (
            <div key={d.id}>
              {d.description}
              {d.product_name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Settings;
