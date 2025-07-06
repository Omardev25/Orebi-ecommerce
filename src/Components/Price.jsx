const Price = ({ original, discounted, className}) => (
  <div className={`pt-5 mb-7 flex items-center gap-x-6 border-b border-gray-100 pb-4 w-1/2 ${className}`}>
    <span className="line-through text-base text-gray-400 font-dm font-normal">{original}</span>
    <span className="text-red-600 text-xl font-dm font-bold">{discounted}</span>
  </div>
);

export default Price;