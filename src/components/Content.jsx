const Content = ({ children, menuToggle }) => {
  return (
    <div className={`page-container__content ${menuToggle && 'active'}`}>
      {children}
    </div>
  );
};

export default Content;
