interface PartnerLogoProps {
  size?: number
  style?: React.CSSProperties
}

function PartnerLogo({ size = 24, style }: PartnerLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Внешний круг */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="#000"
        strokeWidth="4"
      />
      
      {/* Фон неба */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="#E8F5E8"
      />
      
      {/* Река */}
      <path
        d="M20 40 Q30 35 40 40 Q50 45 60 40 Q70 35 80 40"
        stroke="#4CAF50"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Волны на реке */}
      <path
        d="M25 42 Q27 40 29 42 Q31 40 33 42"
        stroke="#2E7D32"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M45 42 Q47 40 49 42 Q51 40 53 42"
        stroke="#2E7D32"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M65 42 Q67 40 69 42 Q71 40 73 42"
        stroke="#2E7D32"
        strokeWidth="1"
        fill="none"
      />
      
      {/* Левый берег с деревом */}
      <path
        d="M15 50 Q25 45 35 50 L35 70 L15 70 Z"
        fill="#2E7D32"
      />
      
      {/* Правое дерево */}
      <path
        d="M65 50 Q75 45 85 50 L85 70 L65 70 Z"
        fill="#2E7D32"
      />
      
      {/* Левое дерево */}
      <circle
        cx="25"
        cy="35"
        r="8"
        fill="#1B5E20"
      />
      <path
        d="M25 43 L25 50"
        stroke="#1B5E20"
        strokeWidth="2"
      />
      
      {/* Правое дерево */}
      <circle
        cx="75"
        cy="35"
        r="8"
        fill="#1B5E20"
      />
      <path
        d="M75 43 L75 50"
        stroke="#1B5E20"
        strokeWidth="2"
      />
      
      {/* Дополнительные деревья на заднем плане */}
      <circle
        cx="20"
        cy="30"
        r="4"
        fill="#2E7D32"
      />
      <circle
        cx="80"
        cy="30"
        r="4"
        fill="#2E7D32"
      />
    </svg>
  )
}

export default PartnerLogo
