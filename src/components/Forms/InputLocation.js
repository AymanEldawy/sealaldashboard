import React from 'react'
import Autocomplete from "react-google-autocomplete";

const api = `AIzaSyAzF5GkF0_m6YR_1Fx8YQ47_pXxfSI6534`
const InputLocation = () => {
  return (
    <div>
      <Autocomplete
        apiKey={api}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />
    </div>
  )
}

export default InputLocation