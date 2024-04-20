type Props = {
  children: React.ReactNode;
  className: string;
};

const DashboardCard = ({ children, className }: Props) => {
  return (
    <div className={`${className} bg-dark-200 rounded-xl p-8`}>{children}</div>
  );
};

export default DashboardCard;
