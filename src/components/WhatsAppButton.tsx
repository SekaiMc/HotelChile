import React from 'react';

interface WhatsAppButtonProps {
  isRoomsSection: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isRoomsSection }) => {
  return (
    <a 
      href="https://wa.me/593999999999" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`fixed right-6 z-50 flex items-center justify-center hover:opacity-80 transition-all duration-500 ${
        isRoomsSection ? 'bottom-36' : 'bottom-6'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <svg 
        width="50" 
        height="50" 
        viewBox="0 0 30 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M21.6646 8.25043C19.9799 6.56557 17.6931 5.62573 15.3033 5.625C10.4033 5.625 6.41997 9.60833 6.41831 14.5083C6.41748 16.1125 6.83081 17.6792 7.62748 19.0542L6.33331 23.75L11.1416 22.4833C12.4683 23.2042 13.9683 23.5875 15.5 23.5875H15.5033C20.4033 23.5875 24.3866 19.6042 24.3883 14.7042C24.3891 12.3167 23.3491 10.0354 21.6646 8.25043ZM15.3033 21.9625H15.3008C13.9358 21.9625 12.5966 21.5958 11.4291 20.9L11.1333 20.7292L8.31581 21.4875L9.08748 18.7375L8.89831 18.4292C8.14081 17.2167 7.74248 15.8292 7.74331 14.5083C7.74498 10.5042 11.2991 7.25 15.3058 7.25C17.2783 7.25083 19.1566 8.04167 20.5683 9.45333C21.9799 10.865 22.7658 12.7433 22.7649 14.7033C22.7633 18.7083 19.2099 21.9625 15.3033 21.9625ZM19.2658 16.4625C19.0266 16.3417 17.9308 15.8042 17.7108 15.7208C17.4908 15.6375 17.3283 15.5958 17.1658 15.8358C17.0033 16.075 16.5783 16.5708 16.4366 16.7333C16.2949 16.8958 16.1533 16.9167 15.9141 16.7958C15.6749 16.675 14.9358 16.4292 14.0641 15.6542C13.3866 15.0583 12.9358 14.3292 12.7941 14.0892C12.6524 13.8492 12.7791 13.7167 12.9016 13.5958C13.0116 13.4875 13.1458 13.3125 13.2666 13.1708C13.3874 13.0292 13.4291 12.9258 13.5124 12.7633C13.5958 12.6008 13.5541 12.4592 13.4916 12.3383C13.4291 12.2175 12.9358 11.1217 12.7316 10.6417C12.5333 10.175 12.3316 10.2417 12.1816 10.2333C12.0399 10.225 11.8774 10.225 11.7149 10.225C11.5524 10.225 11.2908 10.2875 11.0708 10.5275C10.8508 10.7675 10.2741 11.305 10.2741 12.4008C10.2741 13.4967 11.0916 14.55 11.2124 14.7125C11.3333 14.875 12.9333 17.3292 15.3783 18.2833C15.9333 18.5208 16.3666 18.6625 16.7033 18.7667C17.2608 18.9417 17.7658 18.9167 18.1658 18.8533C18.6133 18.7833 19.5058 18.3042 19.7099 17.7417C19.9141 17.1792 19.9141 16.6992 19.8516 16.5917C19.7891 16.4842 19.6266 16.4217 19.3874 16.3008L19.2658 16.4625Z" 
          fill="#5E0A24"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
