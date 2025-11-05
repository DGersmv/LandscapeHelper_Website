import React from 'react';
import { 
  FaTable, 
  FaEdit, 
  FaVectorSquare, 
  FaFolder, 
  FaSeedling, 
  FaCompass, 
  FaMountain,
  FaRuler,
  FaLightbulb,
  FaRocket,
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color, className }) => {
  console.log('Icon component:', { name, size, color });
  
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    // Основные функции
    'table': FaTable,
    'edit': FaEdit,
    'vector-square': FaVectorSquare,
    'folder': FaFolder,
    'seedling': FaSeedling,
    'compass': FaCompass,
    'mountain': FaMountain,
    'ruler': FaRuler,
    
    // UI элементы
    'lightbulb': FaLightbulb,
    'rocket': FaRocket,
    'check-circle': FaCheckCircle,
    'info-circle': FaInfoCircle,
    'exclamation-triangle': FaExclamationTriangle,
  };

  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Available icons:`, Object.keys(iconMap));
    return <span style={{ color: 'red', fontSize: '12px' }}>❌ {name}</span>;
  }

  return (
    <IconComponent 
      size={size} 
      color={color}
      className={className}
    />
  );
};

export default Icon;
