
import React, { useState, useEffect } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';

const OrderStatus = ({ initialStatus }) => {
  const [orderStatus, setOrderStatus] = useState(initialStatus);

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      
      const possibleStatus = ['En Almacén', 'En Progreso', 'En Tránsito', 'Entregado', 'Cancelado'];
      const randomStatus = possibleStatus[Math.floor(Math.random() * possibleStatus.length)];

      setOrderStatus(randomStatus);
    }, 1000); 

    
    return () => clearTimeout(timeoutId);
  }, []);

  
  const getProgress = () => {
    switch (orderStatus) {
      case 'En Almacén':
        return 0;
      case 'En Progreso':
        return 34;
      case 'En Tránsito':
        return 67;
      case 'Entregado':
        return 100;
      case 'Cancelado':
        return 0;
      default:
        return 0;
    }
  };

  return (
    <div className="p-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto min-w-[360px]">
      
      <div className="w-full relative">
        <ProgressBar percent={getProgress()} filledBackground="#916ACC" height={10}>
          <Step>
            {({ accomplished }) => (
              <div className={`step ${accomplished ? 'accomplished' : ''} flex items-center justify-center absolute -left-2`}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: accomplished ? '#FFFF00' : '#ddd',
                  }}
                ></div>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className={`step ${accomplished ? 'accomplished' : ''} flex items-center justify-center absolute left-1/3 -translate-x-1/2`}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: accomplished ? '#0000FF' : '#ddd',
                  }}
                ></div>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className={`step ${accomplished ? 'accomplished' : ''} flex items-center justify-center absolute left-2/3 -translate-x-1/2`}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: accomplished ? '#4caf50' : '#ddd',
                  }}
                ></div>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className={`step ${accomplished ? 'accomplished' : ''} flex items-center justify-center absolute right-2 -translate-x-full`}>
                <div
                  style={{
                    margin: "-10px",
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: accomplished ? '#21da21' : '#ddd',
                  }}
                ></div>
              </div>
            )}
          </Step>
        </ProgressBar>
        <div className="flex justify-between mt-2">
          <span className="text-xs md:text-sm lg:text-base xl:text-lg text-center">En Almacén</span>
          <span className="text-xs md:text-sm lg:text-base xl:text-lg text-center">En Progreso</span>
          <span className="text-xs md:text-sm lg:text-base xl:text-lg text-center">En Tránsito</span>
          <span className="text-xs md:text-sm lg:text-base xl:text-lg text-center">Entregado</span>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;