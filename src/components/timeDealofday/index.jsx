import React from 'react'

import { useState, useEffect   } from 'react'

export default function index() {
    const [saleOff,setSaleOff] = useState({days:36,hours:8,minutes:16,seconds:2})
    useEffect(() => {
      const interval = setInterval(() => {
 
        setSaleOff((prevSaleOff) => {
          const newSeconds = prevSaleOff.seconds - 1;     
          if (newSeconds < 0) {
            const newMinutes = prevSaleOff.minutes - 1;
            if (newMinutes < 0) {
              const newHours = prevSaleOff.hours - 1;
              if (newHours < 0) {
                const newDays = prevSaleOff.days - 1;
                if (newDays < 0) {
                  clearInterval(interval);
                  return { ...prevSaleOff, days: 0, hours: 0, minutes: 0, seconds: 0 };
                }
                return { ...prevSaleOff, days: newDays, hours: 23, minutes: 59, seconds: 59 };
              }
              return { ...prevSaleOff, hours: newHours, minutes: 59, seconds: 59 };
            }
            return { ...prevSaleOff, minutes: newMinutes, seconds: 59 };
          }
          return { ...prevSaleOff, seconds: newSeconds };
        });
      }, 1000);
  
      // Xóa interval khi component bị unmount
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
           <div className="countdown">
                                    <div className="countdown-inner b-radius" data-countdown="" data-date="Mar 02 2022 20:20:22">
                                        <ul className="text-center">
                                            <li><span data-days="">{saleOff.days}</span> Days</li>
                                            <li><span data-hours="">{saleOff.hours}</span> Hours</li>
                                            <li><span data-minutes="">{saleOff.minutes}</span> Mins</li>
                                            <li><span data-seconds="">{saleOff.seconds}</span> Secs</li>
                                        </ul>
                                    </div>
                                </div>
    </div>
  )
}
