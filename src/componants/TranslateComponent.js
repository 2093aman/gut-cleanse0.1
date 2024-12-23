import React, { useEffect, useRef } from "react";

const TranslateComponent = () => {
  const googleTranslateRef = useRef(null);
  console.log("googleTranslateRef is======", googleTranslateRef);
  useEffect(() => {
    let intervalId;

    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        clearInterval(intervalId);

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar,es,zh-CN,ko,my,vi", // Arabic, Spanish, Mandarin (Simplified), Korean, Burmese
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          googleTranslateRef.current
        );
      }
    };

    intervalId = setInterval(checkGoogleTranslate, 100);
  }, []);

  return <div ref={googleTranslateRef} id="google-translate"></div>;
};

export default TranslateComponent;
