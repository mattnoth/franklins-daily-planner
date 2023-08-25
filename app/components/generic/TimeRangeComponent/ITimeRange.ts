import { InputHTMLAttributes } from "react";

interface ITimeRange extends InputHTMLAttributes<HTMLInputElement> {
  startTime: string; 
  endTime: string;
  onStartTimeChange: (value: string) => void;
  onEndTimeChange: (value: string) => void;
  additionalClasses?: string;
}
