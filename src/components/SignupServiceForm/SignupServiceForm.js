import { LanguageContext } from "@/context/LangContext";
import React, { useContext, useState } from "react";
import { InputField } from "../Forms/InputField";
import { fetchWord } from "@/lang/fetchWord";
import { FileUpload } from "../Forms/FileUpload";
import CustomSelectField from "../Forms/CustomSelectField";

const SignupServiceForm = () => {
  const { lang } = useContext(LanguageContext);
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  return (
    <form>
      <InputField
        name="name"
        value={name}
        label={fetchWord("name", lang)}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        name="email"
        value={email}
        label={fetchWord("email", lang)}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        name="location"
        value={location}
        label={fetchWord("location", lang)}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="flex gap-4">
        <CustomSelectField
          name="country"
          value={country}
          label={fetchWord("country", lang)}
          onChange={(e) => setCountry(e.target.value)}
        />
        <CustomSelectField
          name="city"
          value={city}
          label={fetchWord("city", lang)}
          onChange={(e) => setCity(e.target.value)}
        />
        <CustomSelectField
          name="municipality"
          value={municipality}
          label={fetchWord("municipality", lang)}
          onChange={(e) => setMunicipality(e.target.value)}
        />
      </div>
      <InputField
        name="text"
        value={website}
        label={fetchWord("website", lang)}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <InputField
        name="password"
        value={password}
        label={fetchWord("password", lang)}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        name="confirmPassword"
        value={confirmPassword}
        label={fetchWord("confirm_password", lang)}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <FileUpload label="Profile Photo" />
      <label className="flex gap-1 mb-4 text-sm">
        <input type="checkbox" />
        {fetchWord("terms", lang)}
      </label>
    </form>
  );
};

export default SignupServiceForm;
