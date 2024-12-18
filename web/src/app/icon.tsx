import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 56,
  height: 56,
}
export const contentType = 'image/svg+xml'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: 'transparent',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'transparent',
        borderRadius: '100%',
        overflow: 'hidden',
        padding: '2px',
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full object-cover"
      >
        <title>-</title>
        <path
          d="M12.768 32.8633C12.4542 33.1777 12.2781 33.6039 12.2785 34.0481C12.279 34.4923 12.4558 34.9182 12.7702 35.232C13.0846 35.5458 13.5108 35.7219 13.9551 35.7215C14.3993 35.7211 14.8252 35.5442 15.139 35.2298L12.768 32.8633ZM20.3319 30.0301C20.4918 29.8756 20.6192 29.6908 20.7069 29.4865C20.7945 29.2821 20.8406 29.0624 20.8425 28.8401C20.8443 28.6177 20.8018 28.3973 20.7175 28.1915C20.6732 28.0834 20.6178 27.9805 20.5524 27.8843C20.4934 27.7976 20.4261 27.7163 20.3515 27.6418C20.2777 27.568 20.1973 27.5014 20.1114 27.4429C20.0145 27.3768 19.9106 27.3209 19.8014 27.2763C19.5956 27.1922 19.3751 27.1499 19.1528 27.152C18.9304 27.154 18.7107 27.2003 18.5065 27.2881C18.3023 27.376 18.1175 27.5036 17.9632 27.6636L20.3319 30.0301ZM28.3847 16.1972L28.387 16.1995L31.8251 19.6421L34.1939 17.2756L30.7557 13.8307L28.3847 16.1972ZM22.6605 29.9944L20.5524 27.8843L20.1114 27.4429L18.0614 25.3909L18.0603 25.392L15.6949 27.7574L20.2895 32.3565L22.6605 29.9944ZM30.7423 24.6586L28.6013 25.4623L29.5057 27.87L29.7801 28.5968L31.9189 27.7931L30.7423 24.6586ZM22.5935 19.4233L23.3704 17.3023L23.3692 17.3019L20.2247 16.1503L19.45 18.269L22.5935 19.4233ZM18.691 23.0177C19.4233 22.8168 20.2047 22.627 20.8499 22.1626L18.8941 19.4456C18.8495 19.4769 18.778 19.5215 17.8002 19.7916L18.691 23.0177ZM19.45 18.2713C19.1018 19.2223 19.0482 19.2938 19.0147 19.334L21.5643 21.5063C22.0778 20.9012 22.3323 20.1377 22.5935 19.4233L19.45 18.2713ZM20.8499 22.1626C21.1133 21.9721 21.3514 21.7533 21.5643 21.5063L19.0147 19.334C18.9792 19.376 18.9388 19.4135 18.8941 19.4456L20.8499 22.1626ZM28.6013 25.4668C27.8913 25.7325 27.1323 25.9915 26.5317 26.5094L28.7241 29.0411C28.7643 29.0076 28.8357 28.9563 29.7801 28.5991L29.5057 27.87L28.6013 25.4668ZM28.2709 30.2512C28.5388 29.2778 28.5857 29.2019 28.6169 29.1595L25.8954 27.2082C25.4333 27.8534 25.2435 28.6303 25.0426 29.3626L28.2709 30.2512ZM26.5317 26.5094C26.2933 26.7161 26.0801 26.9502 25.8965 27.2067L25.8954 27.2082L28.6169 29.1595C28.6485 29.1158 28.683 29.076 28.7241 29.0411L26.5317 26.5094ZM18.0636 25.3954L18.0603 25.392C17.3255 24.6572 16.8799 24.2049 16.5991 23.8549C16.5528 23.7966 16.5171 23.7481 16.4897 23.7088C16.3497 23.5072 16.4294 23.545 16.4294 23.7187L13.0806 23.741C13.0873 24.6765 13.5539 25.4065 13.9803 25.9401C14.4045 26.4759 15.0184 27.0832 15.6949 27.7619L18.0636 25.3954ZM17.8002 19.7916C16.8781 20.0462 16.0454 20.2716 15.4091 20.5284C14.7751 20.7807 14.0093 21.1825 13.5405 21.9952L16.4428 23.6674C16.355 23.8186 16.2689 23.8137 16.4897 23.7088C16.533 23.6883 16.588 23.6639 16.6571 23.6361C17.0746 23.4687 17.6863 23.2968 18.6887 23.0199L17.8002 19.7916ZM16.4294 23.7187C16.4294 23.7008 16.4339 23.6837 16.4428 23.6674L13.5405 21.9952C13.2361 22.5249 13.0775 23.1302 13.0806 23.741L16.4294 23.7187ZM20.2917 32.3632C20.9727 33.0441 21.5844 33.6603 22.1224 34.0912C22.6582 34.5176 23.395 34.9887 24.3371 34.9909L24.3438 31.6421C24.5203 31.6421 24.5579 31.721 24.3528 31.5774C24.314 31.5503 24.2666 31.5152 24.2099 31.4701C23.8549 31.1888 23.4017 30.7356 22.6605 29.9944L20.2917 32.3632ZM25.0426 29.3626C24.7658 30.3717 24.5916 30.9924 24.4242 31.4143C24.3971 31.4812 24.3731 31.5349 24.3528 31.5774C24.2439 31.8048 24.2365 31.7148 24.3907 31.6264L26.0495 34.5377C26.8688 34.0688 27.2774 33.2986 27.5319 32.6623C27.7887 32.0216 28.0164 31.1822 28.2709 30.2512L25.0426 29.3626ZM24.3371 34.9909C24.9399 34.9909 25.5293 34.8346 26.0495 34.5377L24.3907 31.6264C24.3766 31.6352 24.3604 31.642 24.3438 31.6421L24.3371 34.9909ZM31.8251 19.6421C33.0307 20.8476 33.7987 21.6268 34.2586 22.2452C34.4752 22.5377 34.56 22.7141 34.5913 22.8078L34.6047 22.8659V22.8726L37.8776 23.5803C38.1633 22.2497 37.6074 21.1401 36.9488 20.2516C36.3081 19.3853 35.3235 18.4075 34.1939 17.2778L31.8251 19.6421ZM31.9189 27.7931C33.4147 27.2328 34.7141 26.7505 35.6562 26.2281C36.6229 25.6923 37.5896 24.9109 37.8776 23.5803L34.6047 22.8726L34.6024 22.8793L34.5645 22.9239C34.4052 23.0746 34.2247 23.2009 34.0287 23.299C33.3589 23.6741 32.3386 24.0581 30.7423 24.6586L31.9189 27.7931ZM30.7535 13.8307C29.6171 12.6921 28.6326 11.7031 27.7619 11.0579C26.8711 10.3948 25.7548 9.83444 24.4175 10.1291L25.1386 13.3954L25.1565 13.3976L25.2011 13.411C25.4057 13.494 25.5968 13.6068 25.7682 13.7459C26.3888 14.208 27.1702 14.9827 28.3847 16.2017L28.387 16.1995L30.7535 13.8307ZM23.3682 17.3046L23.3692 17.3019C23.9625 15.6893 24.344 14.6609 24.7144 13.9803C24.8194 13.7686 24.9573 13.575 25.123 13.4065L25.1341 13.3998H25.1386L24.4175 10.1291C23.0802 10.4238 22.3033 11.4017 21.7719 12.3796C21.2562 13.3306 20.7784 14.6434 20.2247 16.1548L23.3682 17.3046ZM15.139 35.2342L20.3319 30.0301L17.9632 27.6659L12.768 32.8633L15.139 35.2342Z"
          fill="#3B9B62"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.9972 3.34886C20.3734 3.34289 16.8124 4.2958 13.6759 6.11086C12.8755 6.57404 11.8511 6.30066 11.388 5.50026C10.9248 4.69986 11.1982 3.67553 11.9986 3.21236C15.6461 1.10159 19.7871 -0.00667571 24.0014 3.02528e-05C37.2559 0.00077638 48 10.7453 48 24C48 37.2552 37.2552 48 24 48C10.7448 48 0 37.2552 0 24C0 19.6326 1.16872 15.5287 3.21247 11.9983C3.67579 11.198 4.70017 10.9248 5.50049 11.3881C6.30081 11.8514 6.574 12.8758 6.11069 13.6761C4.35463 16.7095 3.34884 20.2365 3.34884 24C3.34884 35.4057 12.5943 44.6512 24 44.6512C35.4057 44.6512 44.6512 35.4057 44.6512 24C44.6512 12.5944 35.4057 3.34887 24 3.34887L23.9972 3.34886Z"
          fill="#3B9B62"
        />
        <path
          d="M29.5057 27.87L29.7801 28.5968L28.6013 25.4623L30.7423 24.6586C32.3386 24.0581 33.3589 23.6741 34.0287 23.299C34.2247 23.2009 34.4052 23.0746 34.5645 22.9239L34.6024 22.8793L34.6047 22.8726V22.8659L34.5913 22.8078C34.56 22.7141 34.4752 22.5377 34.2586 22.2452C33.7987 21.6268 33.0307 20.8476 31.8251 19.6421L28.387 16.1995L28.3847 16.2017C27.1702 14.9827 26.3888 14.208 25.7682 13.7459C25.5968 13.6068 25.4057 13.494 25.2011 13.411L25.1565 13.3976L25.1386 13.3954L24.4175 10.1291L25.1386 13.3998H25.1341L25.123 13.4065C24.9573 13.575 24.8194 13.7686 24.7144 13.9803C24.344 14.6609 23.9625 15.6893 23.3692 17.3019L23.3704 17.3023L22.5935 19.4233C22.3323 20.1377 22.0778 20.9012 21.5643 21.5063C21.3514 21.7533 21.1133 21.9721 20.8499 22.1626C20.2047 22.627 19.4233 22.8168 18.691 23.0177L17.8002 19.7916L18.6887 23.0199C17.6863 23.2968 17.0746 23.4687 16.6571 23.6361C16.588 23.6639 16.533 23.6883 16.4897 23.7088C16.5171 23.7481 16.5528 23.7966 16.5991 23.8549C16.8799 24.2049 17.3255 24.6572 18.0603 25.392L18.0614 25.3909L18.0636 25.3931L20.1114 27.4429C20.1973 27.5014 20.2777 27.568 20.3515 27.6418C20.4261 27.7163 20.4934 27.7976 20.5524 27.8843L22.6605 29.9944C23.4017 30.7356 23.8549 31.1888 24.2099 31.4701C24.2666 31.5152 24.314 31.5503 24.3528 31.5774C24.3731 31.5349 24.3971 31.4812 24.4242 31.4143C24.5916 30.9924 24.7658 30.3717 25.0426 29.3626C25.2435 28.6303 25.4333 27.8534 25.8954 27.2082L25.8965 27.2067C26.0801 26.9502 26.2933 26.7161 26.5317 26.5094C27.1323 25.9915 27.8913 25.7325 28.6013 25.4668L29.5057 27.87Z"
          fill="#3B9B62"
        />
      </svg>
    </div>,

    {
      ...size,
    }
  )
}
