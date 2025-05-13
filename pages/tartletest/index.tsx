import * as React from 'react';

const TartleTest = () => {
  return (
    <div className="tartle-test">
      <h1>Tartle EAID:</h1>
      <input type="text" id="_tartle_eaid" value="" placeholder="Tartle EAID" />

      <div
        id="tartle-datavault-connect-button"
        data-client-id="IxuiiJFUE16dBSdHF3CZhJzkx8GmGk-z0yJKDChz0eM"
        data-redirect-uri="https://datavault-test.vercel.app/api/tartle"></div>
    </div>
  );
};

export default TartleTest;
