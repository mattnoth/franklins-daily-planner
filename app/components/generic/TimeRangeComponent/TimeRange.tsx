import React from 'react';

interface ITimeRange extends React.InputHTMLAttributes<HTMLInputElement> {
  startTime: string; 
  endTime: string;
  onStartTimeChange: (value: string) => void;
  onEndTimeChange: (value: string) => void;
  additionalClasses?: string;
}

const BASE_CLASSES = "border rounded-md px-3 py-2 mr-4";

const TimeRange: React.FC<ITimeRange> = ({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
  additionalClasses = '',
  ...props
}) => {

  // Use this function if you want to fetch some server-side data using Next.js 
  // and pass it to your component. For example, default time range values.
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('/api/your-endpoint');
  //     const data = await res.json();
  //     // Do something with data
  //   };
  //   fetchData();
  // }, []);

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStartTimeChange(e.target.value);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEndTimeChange(e.target.value);
  };

  const computedClasses = `${BASE_CLASSES} ${additionalClasses}`;

  return (
    <div className="flex items-center">
      <input 
        type="time" 
        value={startTime} 
        onChange={handleStartTimeChange} 
        className={computedClasses}
        {...props}
      />
      <span className="mx-2">to</span>
      <input 
        type="time" 
        value={endTime} 
        onChange={handleEndTimeChange} 
        className={computedClasses}
        {...props}
      />
    </div>
  );
};

export default TimeRange;
