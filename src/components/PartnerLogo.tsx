interface PartnerLogoProps {
  size?: number
  style?: React.CSSProperties
}

function PartnerLogo({ size = 24, style }: PartnerLogoProps) {
  return (
    <img
      src="/content/logo_new.png"
      alt="Tashi-Ani"
      width={size}
      height={size}
      style={{
        objectFit: 'contain',
        ...style
      }}
    />
  )
}

export default PartnerLogo
