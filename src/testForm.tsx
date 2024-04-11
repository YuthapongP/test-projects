import React, { useEffect, useState } from "react";
import { useFormStore } from "./Store";

const formLabel = ["banner", "promotion", "aboutus"];

export default function TestForm() {
  const { setFormData, formData } = useFormStore();
  const [temp, setTemp] = useState({
    banner: null,
    promotion: null,
    aboutus: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetElement = e.target.elements;
    console.log(targetElement);

    const formValues = {};
    formLabel.forEach((item) => {
      formValues[item] = targetElement[item].value;
    });

    setTemp(formValues);
    setFormData({ promotion: temp.banner });

    // setTemp((prev) => {
    //   return {
    //     ...prev,
    //     banner: Object.values(formValues).map((item) => item === "banner"),
    //   };
    // });
    // console.log(formValues);
  };

  //   useEffect(() => {
  //     if (temp) {
  //       setFormData(temp);
  //     } else {
  //       setFormData(temp);
  //     }
  //   }, []);

  console.log(temp);
  console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formLabel.map((item) => (
          <div>
            <label htmlFor={item}>{item}</label>
            <input type="text" name={item} id={item} />
          </div>
        ))}
        <button type="submit"> submit </button>
      </form>
    </div>
  );
}
