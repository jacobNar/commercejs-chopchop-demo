import Button from "../Button";

function CheckoutSummary({ has, fulfillment, order }) {
  const { subtotal, tax, shipping, line_items, total } = order;

  const count = line_items.length;

  return (
    <div className="py-6">
      <div className="md:flex md:justify-between md:space-x-6">
        <div className="w-full md:w-1/2">
          <ol>
            <li>TotalPris: {subtotal.formatted_with_symbol}</li>
            {tax && <li>Skatt: {tax.amount.formatted_with_symbol}</li>}
            {shipping && (
              <li>Frakt: {shipping.price.formatted_with_symbol}</li>
            )}
            {total && (
              <li className="text-lg md:text-xl py-3">
                Total: {total.formatted_with_symbol}, {count}{" "}o
                {count === 1 ? "produkt" : "produkter"}
              </li>
            )}
          </ol>
        </div>
        {has.digital_fulfillment && (
          <div className="w-full md:w-1/2 md:flex md:items-end md:justify-end space-y-3 md:space-y-0 md:space-x-3">
            {fulfillment.digital.downloads.map((download, index) => (
              <div
                className="md:flex space-y-3 md:space-y-0 md:space-x-3"
                key={index}
              >
                {download.packages.map(({ access_link, name }, index) => (
                  <Button
                    key={index}
                    href={access_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   Last ned {name}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutSummary;
