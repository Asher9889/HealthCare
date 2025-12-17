import React from "react";

interface StarRatingProps {
  name?: string; // unique group name for input radios
  size?: "sm" | "md" | "lg"; // daisyui rating size
  color?: string; // e.g. "bg-green-500"
  max?: number; // max stars
  step?: 0.5 | 1; // allow half stars or full stars
  value?: number; // default selected value
  onChange?: (value: number) => void; // callback when rating changes
}

const StarRating: React.FC<StarRatingProps> = ({
  name = "rating",
  size = "sm",
  color = "bg-yellow-500",
  max = 5,
  step = 0.5,
  value = 5,
  onChange,
}) => {
  // total number of inputs = max / step
  const totalInputs = max / step;

  return (
    <div className={`rating rating-${size} rating-half`}>
      <input type="radio" name={name} className="rating-hidden" defaultChecked={value === 0} />

      {Array.from({ length: totalInputs }, (_, i) => {
        const starValue = (i + 1) * step;
        const isHalf = step === 0.5 && starValue % 1 !== 0;

        return (
          <input
            key={i}
            type="radio"
            name={name}
            className={`mask mask-star ${isHalf ? "mask-half-1" : "mask-half-2"} ${color}`}
            aria-label={`${starValue} star`}
            value={starValue}
            defaultChecked={value === starValue}
            onChange={() => onChange && onChange(starValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
