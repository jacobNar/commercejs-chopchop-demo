import React from "react";

import { FormInput, FormSelect } from "../Form";

function AddressFields({ prefix = "", countries = {}, subdivisions = {} }) {
  const reducer = ([code, name]) => ({
    value: code,
    label: name,
  });

  const formattedCountries = subdivisions
    ? Object.entries(countries).map(reducer)
    : [];

  const formattedSubdivisions = subdivisions
    ? Object.entries(subdivisions).map(reducer)
    : [];

  return (
    <React.Fragment>
      <div className="md:flex md:items-start md:space-x-4">
        <div className="md:w-1/2">
          <FormInput
            label="Fornavn"
            name={`${prefix}.firstname`}
            placeholder="Fornavn"
            required
          />
        </div>
        <div className="md:w-1/2">
          <FormInput
            label="Etternavn"
            name={`${prefix}.lastname`}
            placeholder="Etternavn"
            required
          />
        </div>
      </div>

      <FormInput
        label="Addresse"
        name={`${prefix}.street`}
        placeholder="Addresse"
        required
      />
      <FormInput
        label="By"
        name={`${prefix}.town_city`}
        placeholder="By"
        required
      />

      <div className="md:flex md:items-start md:space-x-4">
        <div className="md:w-1/3">
          <FormSelect
            label="Country"
            name={`${prefix}.country`}
            options={formattedCountries}
            placeholder="Select country"
            disabled={formattedCountries.length === 0}
          />
        </div>
        <div className="md:w-1/3">
          <FormSelect
            label="Fylke"
            name={`${prefix}.region`}
            options={formattedSubdivisions}
            placeholder="Velg fylke"
            disabled={formattedSubdivisions.length === 0}
          />
        </div>
        <div className="md:w-1/3">
          <FormInput
            label="ZIP / Postcode"
            name={`${prefix}.postal_zip_code`}
            placeholder="ZIP"
            required
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddressFields;
