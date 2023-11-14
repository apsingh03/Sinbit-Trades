import React from "react";
import { ThreeDots } from "react-loader-spinner";

const ErrorAndLoader = ({ isLoader }) => {
  return (
    <>
      {/* {isError ? (
        <p
          style={{
            fontSize: 10,
            color: 'red',
            fontWeight: '500',
          }}>
          {isError ? 'Something Went Wrong' : ''}
        </p>
      ) : (
        ''
      )} */}

      {isLoader ? (
        <ThreeDots
          height="50"
          width="50"
          radius="9"
          color="#000"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : null}
    </>
  );
};

export default ErrorAndLoader;
