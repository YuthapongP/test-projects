import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TestFormWatchValueChildren from "./TestFormWatchValueChildren";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function TestFormWatchValue() {
  const [blur, setOnBlur] = useState(false);
  const [allFields, setAllFields] = useState(Array(10).fill(false));
  const [dummy, setDummy] = useState([true, false, false, false]);
  const [focusIndex, setFocusIndex] = useState(null);

  //   useEffect(() => {
  //     const falseIndices = [];

  //     allFields.forEach((value, index) => {
  //       if (!value) {
  //         falseIndices.push(index);
  //       }
  //     });

  //     setAllFields((prev) => {
  //         if (index === )
  //       return prev.map((item, idx) => (idx > falseIndices[0] ? true : item));
  //     });
  //   }, []);

  //   useEffect(() => {
  //     setDummy((prev) => {
  //       const newArray = [...prev];
  //       return newArray.map((item, idx) => (idx > 1 ? true : item));
  //     });
  //   }, []);

  const allFieldSchema = yup.object().shape(
    Array.from({ length: 10 }, (_, index) => `allFields${index + 1}`).reduce(
      (acc, fieldName) => {
        acc[fieldName] = yup.string().required(`${fieldName} is required`);
        return acc;
      },
      {}
    )
  );

  const a = 2;
  console.log(a);

  const methods = useForm({
    resolver: yupResolver(allFieldSchema),
    mode: "onBlur",
  });
  const {
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors, isDirty, isValid },
  } = methods;
  const watchAll = watch();

  console.log(allFields, "allFields");

  //   const {
  //     control,
  //     formState: { errors },
  //     register,
  //     watch,
  //     handleSubmit,
  //   } = useForm({
  //     mode: "onBlur",
  //   });

  const onSubmit = (e) => {
    console.log(e);
    reset();
  };

  //   const handleSetOnBlur = () => {
  //     if (!firstName) {
  //       setOnBlur(false);
  //     }
  //     setOnBlur(true);
  //   };

  //   const handleSetOnBlur = (index) => {
  //     setAllFields((prev) => {
  //       const newBlurredFields = [...prev];
  //       if (!watchAll[index - 1]) {
  //         newBlurredFields[index] = false;
  //         return newBlurredFields;
  //       } else {
  //         newBlurredFields[index] = true;
  //         return newBlurredFields;
  //       }
  //     });
  //   };

  const handleSetOnBlur = (index) => {
    setAllFields((prev) => {
      const newBlurredFields = [...prev];

      if (
        index === 0 ||
        (watchAll[`allFields${index}`] && watchAll[`allFields${index}`] !== "")
      ) {
        newBlurredFields[index] = watchAll[`allFields${index + 1}`] !== "";
      } else {
        newBlurredFields[index] = false;
      }

      return newBlurredFields;
    });
  };

  //   useEffect(() => {
  //     const test = async () => {
  //       const result = await trigger(`allFields${1}`);
  //       console.log(result);
  //     };
  //     test();
  //   }, []);

  //   const handleSetOnBlur = async (index) => {
  //     setAllFields((prev) => {
  //       const newBlurredFields = [...prev];

  //       return newBlurredFields.map((item, idx) => (idx > index ? true : item));

  //       //   if (
  //       //     index === 0 ||
  //       //     (watchAll[`allFields${index}`] && watchAll[`allFields${index}`] !== "")
  //       //   ) {
  //       //     return newBlurredFields.map((item, idx) =>
  //       //       idx > index ? false : item
  //       //     );
  //       //     // newBlurredFields[index] = watchAll[`allFields${index + 1}`] !== "";
  //       //   } else {
  //       //     newBlurredFields[index] = false;
  //       //   }

  //       //   return newBlurredFields;
  //     });
  //   };

  //   const handleSetOnBlur = React.useCallback((index) => {
  //     setAllFields((prev) => {

  //         if (watchAll[`allFields${index}`]) {

  //         }

  //       return prev.map((item, idx) => (idx > index ? false : item));
  //     });
  //   }, []);

  const isFieldEnabled = (index: number) => {
    if (index === 0) return true;
    const previousField = `allFields${index}`;
    return watchAll[previousField] && watchAll[previousField] !== "";
  };

  //   const firstName = watch("firstName");

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Array.from({ length: 10 }, (_, i) => (
          <div>
            <TestFormWatchValueChildren
              name={`allFields${i + 1}`}
              index={i}
              onBlur={() => handleSetOnBlur(i)}
              key={i}
              disabled={!isFieldEnabled(i)}
            ></TestFormWatchValueChildren>
            {/* {errors[`allFields${i + 1}`] && (
              <div
                style={{
                  color: "red",
                }}
              >
                {errors[`allFields${i + 1}`]?.message}
              </div>
            )} */}
            {errors[`allFields${i + 1}`] && (
              <div style={{ color: "red" }}>
                {errors[`allFields${i + 1}`]?.message}
              </div>
            )}
          </div>
        ))}
        <button type="submit" disabled={!isDirty || !isValid}>
          submit
        </button>
      </form>
    </FormProvider>
  );
}
