import React from "react";

const NowLoading = () => {
  return (
    <>
      <tr>
        <td colspan="5">
          <div
            class="progress"
            role="progressbar"
            aria-label="Success striped example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar progress-bar-striped bg-dark w-50"></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default NowLoading;
