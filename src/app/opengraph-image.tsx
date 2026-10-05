import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — GOI & GOX Airport Taxi in Goa`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #071b24 0%, #0d303c 55%, #164955 100%)",
          color: "white",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#f3c14a",
          }}
        >
          {site.name} · Panaji, Goa
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            GOI & GOX airport taxis.
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.72)", maxWidth: 820 }}>
            Dabolim and Mopa pickups, beach hops, and outstation trips — honest fares, 24/7.
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#f3c14a" }}>
          <span>Dabolim (GOI)</span>
          <span>·</span>
          <span>Mopa (GOX)</span>
          <span>·</span>
          <span>{site.phoneDisplay}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
