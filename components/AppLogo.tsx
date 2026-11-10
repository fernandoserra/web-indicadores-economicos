type AppLogoProps = {
  /** Lado del ícono en píxeles. */
  size?: number;
};

/** Ícono de la app: tres barras blancas sobre el degradado verde de marca (mismo diseño que el ícono de la tienda). */
export default function AppLogo({ size = 32 }: AppLogoProps) {
  const unit = size / 1024;
  const bars = [290, 430, 570];

  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-end justify-center overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.225,
        background: "linear-gradient(160deg, #1BB07A 0%, #0A5A3E 100%)",
        gap: 72 * unit,
        paddingBottom: 232 * unit,
      }}
    >
      {bars.map((height) => (
        <span
          key={height}
          className="block bg-white"
          style={{ width: 150 * unit, height: height * unit, borderRadius: 40 * unit }}
        />
      ))}
    </span>
  );
}
