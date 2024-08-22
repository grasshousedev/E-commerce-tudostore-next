import toast from 'react-hot-toast';

import { ImgAnimated } from '../styles/toast-img-load-animation';

export const toastSmallScreenCustom = (img: string, msg: string) => {
  const toastId = toast(
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ImgAnimated
        src={img}
        alt="small-icon"
        className="load-animation"
        width="40"
        height="40"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          marginRight: '10px',
          objectFit: 'contain',
        }}
        onLoad={(e) => {
          const el = e.target as HTMLElement;
          el.classList.remove('load-animation');
        }}
      />
      <p>{msg}</p>
    </div>,
  );
  setTimeout(() => toast.dismiss(toastId), 1300);
};

/* .custom-toast-small-icon': {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      margin: '0 10px',
      objectFit: 'contain',
    } */
