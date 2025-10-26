const NoChatMessages = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-6 z-10">
      <svg
        fill="none"
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <filter
          id="a"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="54"
          width="48"
          x="0"
          y="-3"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            in2="shape"
            mode="normal"
            result="effect1_innerShadow_3051_46851"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
          />
          <feBlend
            in2="effect1_innerShadow_3051_46851"
            mode="normal"
            result="effect2_innerShadow_3051_46851"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="erode"
            radius="1"
            result="effect3_innerShadow_3051_46851"
          />
          <feOffset />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.24 0"
          />
          <feBlend
            in2="effect2_innerShadow_3051_46851"
            mode="normal"
            result="effect3_innerShadow_3051_46851"
          />
        </filter>
        <filter
          id="b"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="42"
          width="42"
          x="3"
          y="5.25"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="erode"
            radius="1.5"
            result="effect1_dropShadow_3051_46851"
          />
          <feOffset dy="2.25" />
          <feGaussianBlur stdDeviation="2.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_3051_46851"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3051_46851"
            mode="normal"
            result="shape"
          />
        </filter>
        <linearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="24"
          x2="26"
          y1=".000001"
          y2="48"
        >
          <stop offset="0" stop-color="#fff" stop-opacity="0" />
          <stop offset="1" stop-color="#fff" stop-opacity=".12" />
        </linearGradient>
        <linearGradient
          id="d"
          gradientUnits="userSpaceOnUse"
          x1="24"
          x2="24"
          y1="6"
          y2="42"
        >
          <stop offset="0" stop-color="#fff" stop-opacity=".8" />
          <stop offset="1" stop-color="#fff" stop-opacity=".5" />
        </linearGradient>
        <linearGradient
          id="e"
          gradientUnits="userSpaceOnUse"
          x1="24"
          x2="24"
          y1="0"
          y2="48"
        >
          <stop offset="0" stop-color="#fff" stop-opacity=".12" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <clipPath id="f">
          <rect height="48" rx="12" width="48" />
        </clipPath>
        <g filter="url(#a)">
          <g clip-path="url(#f)">
            <rect fill="#0A0D12" height="48" rx="12" width="48" />
            <path d="m0 0h48v48h-48z" fill="url(#c)" />
            <g filter="url(#b)">
              <path
                clip-rule="evenodd"
                d="m6 24c11.4411 0 18-6.5589 18-18 0 11.4411 6.5589 18 18 18-11.4411 0-18 6.5589-18 18 0-11.4411-6.5589-18-18-18z"
                fill="url(#d)"
                fill-rule="evenodd"
              />
            </g>
          </g>
          <rect
            height="46"
            rx="11"
            stroke="url(#e)"
            stroke-width="2"
            width="46"
            x="1"
            y="1"
          />
        </g>
      </svg>

      <div className="flex flex-col space-y-2.5 text-center">
        <h2 className="text-xl font-semibold tracking-tight">
          👋 Welcome to SQL AI Agent
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Ask me anything about your SQL database. I&apos;m here to help you
          with queries, data analysis, and more! Get started by typing your
          first question below.
        </p>
      </div>
    </div>
  );
};

export default NoChatMessages;
