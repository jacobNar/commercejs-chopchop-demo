import { useCheckoutState } from "../context/checkout";

// TODO: Build array of crumbs dynamically from available steps

function Breadcrumbs({ inCart }) {
  const { currentStep, extrafields } = useCheckoutState();

  if (inCart) {
    return <span className="text-lg md:text-xl">Handlekurv</span>;
  }

  if (currentStep === "success") {
    return <span className="text-lg md:text-xl">Fårespørsel motatt</span>;
  }

  return (
    <div className="space-x-3">
      {currentStep === "extrafields" && (
        <>
          <span className="text-lg md:text-xl">Handlekurv</span>
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Booking</span>
          <span className="text-lg md:text-xl opacity-50">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50">Frakt</span>
          <span className="text-lg md:text-xl opacity-50">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50">Betaling</span>
        </>
      )}
      {currentStep === "shipping" && (
        <>
          <span className="text-lg md:text-xl">Handlekurv</span>

          {extrafields.length > 0 && (
            <>
              <span className="text-lg md:text-xl">&rarr;</span>
              <span className="text-lg md:text-xl">Booking</span>
            </>
          )}
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Frakt</span>
          <span className="text-lg md:text-xl opacity-50">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50">Betaling</span>
        </>
      )}
      {currentStep === "billing" && (
        <>
          <span className="text-lg md:text-xl">Handlekurv</span>
          {extrafields.length > 0 && (
            <>
              <span className="text-lg md:text-xl">&rarr;</span>
              <span className="text-lg md:text-xl">Booking</span>
            </>
          )}
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Frakt</span>
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Betaling</span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
