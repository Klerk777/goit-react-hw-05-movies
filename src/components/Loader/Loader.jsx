import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#f1c40fed"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        top: '20px',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
