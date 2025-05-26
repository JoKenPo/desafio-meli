import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

export default function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <StarFilledIcon key={`full-${i}`} className="w-5 h-5 text-BLUE" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
    </>
  );
};