import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Ensure you import the PhoneInput CSS

const PhoneNumber = ({ onChange, value }) => {
  const [countryFormatter, setCountryFormatter] = useState({
    dialCode: "91",
    limit: 15,
  });

  const isValid = (formattedValue, country) => {
    if (country.dialCode !== countryFormatter.dialCode) {
      setCountryFormatter({
        dialCode: country.dialCode,
        limit: country.format.length,
      });
    }
    if (formattedValue.length <= country.format.length) {
      onChange && onChange({ num: formattedValue, dialCode: country.dialCode });
    }
  };

  return (
    <PhoneInput
      value={value?.num}
      country="in"
      placeholder="Enter a phone number"
      countryCodeEditable={false}
      enableLongNumbers={true}
      onKeyDown={(e) => {
        if (
          e.key !== "Backspace" &&
          value?.num?.length === countryFormatter.limit
        ) {
          e.preventDefault();
        }
      }}
      onChange={(formattedValue, country) => isValid(formattedValue, country)}
    />
  );
};

export default PhoneNumber;
