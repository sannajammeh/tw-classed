const ButtonVariantsBench = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fontFamily: "Arial",
    }}
    width={800}
    height={450}
    {...props}
  >
    <title>{"Mount button with variants"}</title>
    <defs>
      <clipPath id="a">
        <path d="M0 0h675v349H0z" />
      </clipPath>
    </defs>
    <g className="scaler">
      <path fill="none" d="M0 0h800v450H0z" />
      <g className="canvas">
        <g className="grid">
          <g className="axis-grid y">
            <path
              className="grid"
              style={{
                stroke: "var(--slate11)",
                strokeOpacity: 0.3,
                strokeWidth: 1,
              }}
              transform="translate(100 400)"
              d="M0 0v-349"
            />
            <path
              className="grid"
              style={{
                stroke: "var(--slate11)",
                strokeOpacity: 0.3,
                strokeWidth: 1,
              }}
              transform="translate(246.74 400)"
              d="M0 0v-349"
            />
            <path
              className="grid"
              style={{
                stroke: "var(--slate11)",
                strokeOpacity: 0.3,
                strokeWidth: 1,
              }}
              transform="translate(393.478 400)"
              d="M0 0v-349"
            />
            <path
              className="grid"
              style={{
                stroke: "var(--slate11)",
                strokeOpacity: 0.3,
                strokeWidth: 1,
              }}
              transform="translate(540.217 400)"
              d="M0 0v-349"
            />
            <path
              className="grid"
              style={{
                stroke: "var(--slate11)",
                strokeOpacity: 0.3,
                strokeWidth: 1,
              }}
              transform="translate(686.957 400)"
              d="M0 0v-349"
            />
          </g>
        </g>
        <g className="chart">
          <g className="series s0">
            <path
              fill="#6E56CF"
              clipPath="url(#a)"
              d="M0 265.905h652.49v66.476H0zM0 182.81h360.01v66.476H0zM0 99.714h347.273v66.476H0zM0 16.619h230.879v66.476H0z"
              transform="translate(100 51)"
              className="bar"
            />
          </g>
        </g>
        <g className="axes">
          <g className="axis left">
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M100 350.143h-6" />
              <text
                x={-9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "end",
                }}
                transform="translate(100 350.143)"
                data-org-x={-9}
                data-org-y={0}
              >
                {"stitches.js"}
              </text>
            </g>
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M100 267.048h-6" />
              <text
                x={-9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "end",
                }}
                transform="translate(100 267.048)"
                data-org-x={-9}
                data-org-y={0}
              >
                {"tw-classed"}
              </text>
            </g>
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M100 183.952h-6" />
              <text
                x={-9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "end",
                }}
                transform="translate(100 183.952)"
                data-org-x={-9}
                data-org-y={0}
              >
                {"cva"}
              </text>
            </g>
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M100 100.857h-6" />
              <text
                x={-9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "end",
                }}
                transform="translate(100 100.857)"
                data-org-x={-9}
                data-org-y={0}
              >
                {"react"}
              </text>
            </g>
            <path className="domain" d="M100 51v349" fill="none" />
          </g>
          <g className="axis bottom">
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M100 400v6" />
              <text
                y={9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "middle",
                }}
                transform="translate(100 400)"
                data-org-x={0}
                data-org-y={9}
              >
                {"0"}
              </text>
            </g>
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M246.74 400v6" />
              <text
                y={9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "middle",
                }}
                transform="translate(246.74 400)"
                data-org-x={0}
                data-org-y={9}
              >
                {"0.01"}
              </text>
            </g>
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M393.478 400v6" />
              <text
                y={9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "middle",
                }}
                transform="translate(393.478 400)"
                data-org-x={0}
                data-org-y={9}
              >
                {"0.01"}
              </text>
            </g>
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M540.217 400v6" />
              <text
                y={9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "middle",
                }}
                transform="translate(540.217 400)"
                data-org-x={0}
                data-org-y={9}
              >
                {"0.01"}
              </text>
            </g>
            <g
              className="tick major"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              <path d="M686.957 400v6" />
              <text
                y={9}
                dy={7}
                style={{
                  fill: "var(--slate11)",
                  fillOpacity: 1,
                  fontFamily: "Arial",
                  fontSize: 14,
                  textAnchor: "middle",
                }}
                transform="translate(686.957 400)"
                data-org-x={0}
                data-org-y={9}
              >
                {"0.02"}
              </text>
            </g>
            <path className="domain" d="M100 400h675" fill="none" />
            <path className="filler" d="M100 400" fill="none" />
          </g>
        </g>
      </g>
      <g className="legend">
        <g className="row">
          <text
            className="key"
            style={{
              fontSize: 14,
              fill: "var(--slate11)",
              fillOpacity: 1,
            }}
            dx={28}
            dy={14}
            transform="translate(304.05 25)"
          >
            {"render ms. (lower is better)"}
          </text>
          <path
            className="shape"
            d="M0 7.899A7.899 7.899 0 1 1 0-7.9 7.899 7.899 0 1 1 0 7.9Z"
            style={{
              fill: "#6e56cf",
              fillOpacity: 1,
            }}
            transform="translate(318.05 34.24)"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default ButtonVariantsBench;
