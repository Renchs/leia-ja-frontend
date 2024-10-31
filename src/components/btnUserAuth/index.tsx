interface btnUserAuthProps {
  children: React.ReactNode;
  styles: string;
  type?: "submit" | "button";
  handleButtonClick: () => void;
}
export function BtnUserAuth({ children, type, styles, handleButtonClick }: btnUserAuthProps) {
  return (
    <button
      onClick={handleButtonClick}
      type={type}
      className={`h-14 text-2xl rounded ${styles}`}>
      {children}
    </button>
  )
}
