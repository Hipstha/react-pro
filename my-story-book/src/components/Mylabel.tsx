import './MyLabel.css';

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Capitalize label
   */
  allCaps?: boolean;

  /**
   * background color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

  /**
   * Font color
   */
  fontColor?: string;

} 

export const MyLabel = ( 
  { label, 
    size = 'h1', 
    allCaps = false,
    color = 'text-primary',
    fontColor = 'black', 
  }: Props ) => {
  return (
    <span 
      className={`${size} ${color}`}
      style={{
        color: fontColor
      }}
    >
      {
        allCaps ? label.toLocaleUpperCase() : label
      }
    </span>
  );
};