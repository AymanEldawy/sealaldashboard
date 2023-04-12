import React from "react";

const GearWorkIcon = ({ ...classes }) => {
  return (
    <svg
      width="122"
      height="124"
      viewBox="0 0 122 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...classes}
    >
      <path
        opacity="0.29"
        d="M19.889 71.0006C15.106 72.0076 10.161 72.1086 5.36802 67.1836C2.16602 63.9016 0.56502 58.9976 0.75602 53.8596C13.011 68.1086 27.945 50.4966 9.81902 41.3426C18.57 37.1936 26.827 41.0906 31.208 49.1566C33.282 52.9626 34.521 54.9566 36.102 56.3166C36.3884 56.568 36.691 56.8002 37.008 57.0116C37.6786 55.0895 39.0436 53.4876 40.835 52.5206C41.8467 51.9964 42.9686 51.7201 44.108 51.7146C47.308 51.7146 51.298 53.6276 51.973 56.8906C52.1172 56.8502 52.2663 56.83 52.416 56.8306H54.742C54.8659 56.8152 54.9912 56.8152 55.115 56.8306C56.3445 56.9435 57.503 57.4569 58.4126 58.2919C59.3221 59.1268 59.9325 60.2372 60.15 61.4526C60.3734 61.3464 60.6177 61.2914 60.865 61.2916H63.191C63.3149 61.2762 63.4402 61.2762 63.564 61.2916C66.897 61.8056 68.247 63.8596 68.72 66.4476H71.308C71.4319 66.4322 71.5572 66.4322 71.681 66.4476C75.508 67.0416 77.008 69.5476 77.592 72.5706C84.641 71.4936 92.264 67.2636 99.746 74.9166C101.374 76.7104 102.622 78.8162 103.413 81.1063C104.203 83.3964 104.521 85.8232 104.346 88.2396C92.091 73.9916 77.156 91.6046 95.284 100.76C87.762 104.325 80.592 101.938 75.95 96.0666C75.3162 97.7858 74.5277 99.444 73.594 101.021C73.211 101.645 72.819 102.29 72.315 103.176C72.3099 103.199 72.3099 103.223 72.315 103.246C71.9196 103.943 71.4825 104.615 71.006 105.26H72.616C73.283 105.262 73.922 105.528 74.3936 106C74.8653 106.472 75.1314 107.111 75.134 107.778V121.483C75.1314 122.15 74.8653 122.789 74.3936 123.26C73.922 123.732 73.283 123.998 72.616 124.001H36.132C35.465 123.998 34.8261 123.732 34.3544 123.26C33.8828 122.789 33.6167 122.15 33.614 121.483V107.883C33.6153 107.215 33.8809 106.575 34.3527 106.102C34.8245 105.629 35.4641 105.362 36.132 105.36H37.008C36.5688 104.124 36.265 102.844 36.102 101.543L23.556 80.9906L23.496 80.9206C22.5029 79.5937 21.6585 78.1618 20.978 76.6506C20.3915 75.3786 20.0237 74.0169 19.89 72.6226C19.8495 72.0964 19.8495 71.5678 19.89 71.0416L19.889 71.0006ZM112.533 37.4776C112.462 37.206 112.335 36.9522 112.16 36.7326C112.01 36.5335 111.812 36.3745 111.586 36.2696C111.373 36.143 111.133 36.0671 110.886 36.0476C110.628 36.0403 110.37 36.071 110.121 36.1386H110.061L102.649 38.3946C101.954 38.6205 101.201 38.5868 100.529 38.2998C99.8566 38.0127 99.3114 37.4918 98.994 36.8336C98.611 36.1896 98.239 35.5546 97.786 34.8196C97.333 34.0846 96.779 33.4296 96.386 32.8056C95.9253 32.1372 95.399 31.5165 94.815 30.9526C94.215 30.3286 93.808 29.8046 93.115 29.1096C92.6715 28.6388 92.3858 28.0416 92.2974 27.4009C92.209 26.7601 92.3225 26.1078 92.622 25.5346L96.559 18.1346C96.6941 17.9168 96.7763 17.6704 96.7991 17.4152C96.8218 17.1599 96.7845 16.9028 96.69 16.6646C96.6251 16.4297 96.5195 16.208 96.378 16.0096C96.2094 15.8011 95.9971 15.6321 95.756 15.5146L86.431 10.5496C86.215 10.4329 85.9847 10.3448 85.746 10.2876C85.4666 10.2822 85.1881 10.3197 84.92 10.3986C84.6893 10.4521 84.4772 10.5668 84.306 10.7306C84.0992 10.8971 83.9309 11.1066 83.813 11.3446L80.188 18.1446C79.8436 18.7924 79.284 19.2997 78.6057 19.5792C77.9274 19.8586 77.1728 19.8927 76.472 19.6756C75.646 19.4646 74.872 19.2626 74.186 19.1216C73.5 18.9806 72.635 18.8396 71.809 18.7286C71.0072 18.6234 70.2004 18.5596 69.392 18.5376C68.546 18.4776 67.761 18.5376 67.005 18.4776C66.3277 18.503 65.6614 18.2998 65.1135 17.9008C64.5656 17.5018 64.1678 16.9301 63.984 16.2776L61.468 8.1236V8.0236C61.3999 7.78887 61.2981 7.56523 61.166 7.3596C60.8264 7.01482 60.3781 6.79793 59.897 6.7456C59.6169 6.72276 59.3352 6.76062 59.071 6.8566L49.092 9.90559C48.8201 9.97071 48.5658 10.0946 48.347 10.2686C48.1494 10.4232 47.988 10.6191 47.874 10.8426C47.745 11.0595 47.6725 11.3054 47.663 11.5576C47.6514 11.8126 47.6821 12.0677 47.754 12.3126V12.3596L50.02 19.7596C50.2311 20.4577 50.1893 21.2079 49.902 21.8782C49.6146 22.5485 49.1002 23.0961 48.449 23.4246C47.805 23.7976 47.17 24.1696 46.435 24.6326C45.7 25.0956 45.045 25.5896 44.421 26.0326C43.7538 26.5163 43.112 27.034 42.498 27.5836C41.884 28.1276 41.34 28.5906 40.655 29.2956C40.1791 29.7448 39.5741 30.0332 38.9254 30.1198C38.2767 30.2065 37.6172 30.0871 37.04 29.7786L29.649 25.8416C29.4165 25.712 29.1592 25.633 28.894 25.6096C28.6605 25.6084 28.4276 25.6319 28.199 25.6796C27.9693 25.7303 27.7573 25.8414 27.585 26.0016C27.3753 26.1693 27.2067 26.3827 27.092 26.6256L26.692 27.3706C24.4603 26.9391 22.1794 26.8206 19.915 27.0186L21.707 23.6456C22.2161 22.6916 22.8992 21.8414 23.721 21.1386C24.5609 20.4616 25.5211 19.9493 26.551 19.6286C27.585 19.3061 28.6729 19.1932 29.751 19.2966C30.8118 19.442 31.8362 19.7834 32.772 20.3036L38.24 23.2236L38.64 22.8916C39.34 22.2776 40.1 21.6916 40.855 21.0996C41.61 20.5076 42.426 19.9116 43.171 19.4276L43.433 19.2366L41.922 14.1596C41.5821 13.1321 41.4688 12.0431 41.59 10.9676C41.6841 9.88795 41.9993 8.83921 42.516 7.8866C43.0094 6.93091 43.6951 6.08758 44.53 5.4096C45.3693 4.72592 46.334 4.21266 47.37 3.8986L57.43 0.772595C58.4524 0.438695 59.5282 0.298628 60.602 0.359595C61.6824 0.449765 62.7319 0.765203 63.683 1.2856C64.6524 1.8151 65.5107 2.52639 66.211 3.3806C66.878 4.21087 67.3558 5.17666 67.611 6.2106L69.456 12.1316C69.6 12.1463 69.7451 12.1463 69.889 12.1316C70.795 12.1816 71.732 12.2926 72.719 12.3836C73.6695 12.4905 74.614 12.645 75.549 12.8466C75.6854 12.8529 75.8192 12.887 75.942 12.9466L78.416 8.2846C78.9137 7.33086 79.601 6.48883 80.4357 5.81012C81.2703 5.13141 82.2348 4.63033 83.27 4.3376H83.33C84.3418 4.02085 85.4077 3.91467 86.462 4.0256C87.5163 4.13462 88.5409 4.43986 89.483 4.9256L98.798 9.9006C99.7524 10.4091 100.603 11.0923 101.305 11.9146C102.002 12.7449 102.517 13.7125 102.816 14.7546C103.14 15.7856 103.253 16.8711 103.148 17.9466C103.009 19.0088 102.667 20.0343 102.141 20.9676L99.221 26.4456C99.332 26.5566 99.453 26.7276 99.563 26.8386C100.163 27.5536 100.763 28.2986 101.345 29.0536C101.927 29.8086 102.545 30.6246 103.017 31.3696L103.208 31.6416L108.293 30.1206C109.321 29.7837 110.41 29.6739 111.485 29.7986C112.563 29.8939 113.611 30.2054 114.566 30.7146C115.523 31.2061 116.367 31.8921 117.043 32.7286V32.8096C117.727 33.6489 118.24 34.6136 118.554 35.6496L121.575 45.6286H121.625C121.931 46.6495 122.05 47.7173 121.977 48.7806C121.884 49.8591 121.57 50.9069 121.056 51.8596C120.545 52.8037 119.862 53.6439 119.042 54.3366C118.206 55.0086 117.233 55.4898 116.192 55.7466L110.271 57.5896V58.0596C110.237 58.9728 110.156 59.8836 110.029 60.7886V60.9396C109.909 61.9015 109.738 62.8562 109.515 63.7996L109.444 64.1416L114.144 66.6486C115.107 67.1351 115.955 67.8218 116.631 68.6626C117.299 69.4934 117.795 70.4486 118.091 71.4726V71.5426C118.408 72.5509 118.514 73.6135 118.403 74.6646C118.297 75.7202 117.989 76.7457 117.497 77.6856L116.752 79.0856L115.423 78.3706C114.43 75.5368 112.951 72.8975 111.053 70.5706C110.912 70.3796 110.761 70.1976 110.6 70.0166C108.471 67.4737 105.895 65.3408 103 63.7226C103.091 63.3496 103.181 62.9676 103.262 62.5846C103.393 61.8296 103.544 61.0336 103.635 60.1476V59.9966C103.746 59.1806 103.806 58.4456 103.867 57.7106C103.931 56.9167 103.955 56.1199 103.937 55.3236C103.912 54.6462 104.115 53.98 104.514 53.4321C104.913 52.8842 105.485 52.4863 106.137 52.3026L114.284 49.7846H114.395C114.628 49.7192 114.849 49.618 115.05 49.4846C115.228 49.3338 115.369 49.1443 115.463 48.9306C115.583 48.7098 115.655 48.4661 115.674 48.2156C115.697 47.9355 115.659 47.6537 115.563 47.3896L112.542 37.4206L112.533 37.4776ZM78.295 34.3666C79.708 35.106 81.0362 35.9973 82.256 37.0246C83.4745 38.0267 84.5879 39.1502 85.579 40.3776C86.514 41.5842 87.3558 42.8602 88.097 44.1946C88.8186 45.5163 89.3991 46.9104 89.829 48.3536C90.2854 49.8065 90.5759 51.3064 90.695 52.8246C90.8611 54.3441 90.8611 55.8771 90.695 57.3966C90.695 57.5076 90.695 57.5876 90.695 57.6586C90.5729 58.9421 90.3437 60.2132 90.01 61.4586C88.359 61.6196 86.717 61.8816 85.096 62.1736L83.606 61.3736C83.737 61.0316 83.848 60.6786 83.958 60.3166C84.2631 59.2831 84.4786 58.2251 84.602 57.1546C84.5918 57.0809 84.5918 57.0062 84.602 56.9326C84.7182 55.7809 84.7182 54.6203 84.602 53.4686C84.4963 52.3671 84.2873 51.278 83.978 50.2156C83.6602 49.1644 83.228 48.1514 82.689 47.1946C82.1402 46.173 81.4963 45.2054 80.766 44.3046C80.0312 43.3991 79.2045 42.5724 78.299 41.8376C76.4519 40.3375 74.332 39.209 72.056 38.5146C71.0225 38.2095 69.9646 37.994 68.894 37.8706C68.8207 37.885 68.7453 37.885 68.672 37.8706C67.5198 37.7645 66.3603 37.7645 65.208 37.8706C64.1062 37.9797 63.0171 38.1919 61.955 38.5046C60.9039 38.8223 59.8908 39.2546 58.934 39.7936C57.9126 40.3389 56.945 40.9794 56.044 41.7066C55.1499 42.4361 54.3302 43.2524 53.597 44.1436C53.365 44.4156 53.134 44.7076 52.912 45.0196L47.412 42.0896C47.8512 41.4247 48.3287 40.786 48.842 40.1766C49.8177 38.9679 50.9144 37.8622 52.115 36.8766C53.319 35.935 54.5953 35.0898 55.932 34.3486C57.2875 33.6315 58.7066 33.0416 60.171 32.5866C61.6107 32.1417 63.0921 31.8448 64.592 31.7006C66.1151 31.5395 67.6509 31.5395 69.174 31.7006C69.274 31.7006 69.365 31.7506 69.426 31.7006C70.9096 31.8426 72.3763 32.1259 73.806 32.5466C75.3306 33.013 76.8102 33.6154 78.227 34.3466L78.295 34.3666ZM40.14 58.5346V58.6346V58.7656V58.9766V59.0876V59.1986V59.5406V59.7726V59.8936V60.1256V60.2596V60.3906V60.7836V60.9146V61.0556V61.3076V79.9126C40.1588 80.1455 40.1292 80.3798 40.053 80.6007C39.9768 80.8216 39.8556 81.0244 39.6972 81.1961C39.5388 81.3679 39.3465 81.505 39.1324 81.5987C38.9184 81.6925 38.6872 81.7409 38.4535 81.7409C38.2198 81.7409 37.9887 81.6925 37.7746 81.5987C37.5606 81.505 37.3683 81.3679 37.2098 81.1961C37.0514 81.0244 36.9302 80.8216 36.854 80.6007C36.7778 80.3798 36.7482 80.1455 36.767 79.9126V76.7916C36.6785 76.7416 36.5942 76.6844 36.515 76.6206L32.779 74.0326L28.409 70.4326C27.9628 70.0563 27.4685 69.7412 26.939 69.4956H25.8C25.3177 69.3749 24.8108 69.3958 24.34 69.5556C24.159 69.6313 23.9949 69.7425 23.8575 69.8827C23.7201 70.0228 23.6121 70.1891 23.54 70.3716H23.44C23.2347 71.06 23.1667 71.782 23.24 72.4966C23.3436 73.5093 23.6196 74.4969 24.056 75.4166C24.6391 76.652 25.3549 77.8202 26.191 78.9006C26.2272 78.9524 26.2606 79.0062 26.291 79.0616L39.083 99.9726C39.238 100.201 39.3348 100.463 39.365 100.738C39.4739 102.354 39.9234 103.929 40.684 105.36H66.211C67.4987 104.382 68.5568 103.135 69.311 101.705C69.3275 101.672 69.3476 101.642 69.371 101.614C69.734 100.99 70.217 100.194 70.69 99.4136C71.933 97.2535 72.9005 94.9462 73.57 92.5456V92.3296V92.1596V92.0596L73.63 91.8596V91.7596V91.5596V90.7946V90.5946V90.4136V89.9706V89.7896V89.5986V88.5326V87.4956V86.4886L73.499 80.7486C73.494 80.668 73.494 80.5872 73.499 80.5066C73.499 80.4256 73.499 79.8826 73.499 79.1576V78.9766V77.7376V77.5466V76.2466V76.0596V74.9786V74.8076V74.6266V73.4376V73.2766V72.8596C73.3767 72.1207 73.0331 71.4363 72.5135 70.8969C71.9939 70.3575 71.3228 69.9884 70.589 69.8386H68.971V71.2486V71.3486V71.4296V71.8596V71.9596V72.0296V72.0796V72.1296V72.1796C68.911 73.1166 68.86 74.0326 68.86 74.8986C68.86 75.3473 68.6818 75.7777 68.3644 76.095C68.0471 76.4123 67.6168 76.5906 67.168 76.5906C66.7193 76.5906 66.2889 76.4123 65.9716 76.095C65.6543 75.7777 65.476 75.3473 65.476 74.8986C65.476 74.0326 65.546 73.0256 65.607 71.9786V71.6466V71.4756V71.3246V70.9926V70.8196V70.6686V70.4976V71.0516V70.7096V70.3776V70.0456V69.8456C65.607 67.3076 65.154 65.1026 63.107 64.7296H60.874C60.7535 64.7456 60.6315 64.7456 60.511 64.7296C60.511 65.6766 60.511 66.6626 60.43 67.6196V68.6266C60.37 69.5636 60.319 70.4696 60.319 71.3356C60.319 71.7843 60.1408 72.2147 59.8234 72.532C59.5061 72.8493 59.0758 73.0276 58.627 73.0276C58.1783 73.0276 57.7479 72.8493 57.4306 72.532C57.1133 72.2147 56.935 71.7843 56.935 71.3356C56.935 70.4696 57.005 69.4626 57.066 68.4156V68.2446V68.0936V67.9296V67.7596V67.5886V67.4176V67.0956V66.9346V66.7596V66.6186V66.4496V66.2786V66.2086C57.147 63.3486 56.834 60.7086 54.579 60.2976H52.405C52.2585 60.2988 52.1126 60.2786 51.972 60.2376V66.7726C51.972 67.2213 51.7938 67.6517 51.4764 67.969C51.1591 68.2863 50.7288 68.4646 50.28 68.4646C49.8313 68.4646 49.4009 68.2863 49.0836 67.969C48.7663 67.6517 48.588 67.2213 48.588 66.7726V58.5146C48.588 56.1786 46.272 55.1716 44.107 55.1716C43.4979 55.173 42.8977 55.3179 42.355 55.5946C41.2326 56.2675 40.4162 57.3511 40.079 58.6156L40.14 58.5346ZM36.293 70.8496L34.702 70.1946C33.979 69.9 33.2394 69.6479 32.487 69.4396L34.914 71.4536L36.294 72.5816L36.293 70.8496Z"
        fill="#0063C6"
      />
    </svg>
  );
};

export default GearWorkIcon;
