import Image from 'next/image'

const Error = ({content, alt}) => {
  return (
    <div>
      <div className="err-image">
        <Image src='/flatlining.png' width={700} height={200} alt={alt} />
      </div>
      <div className="err-text">
        {content}
      </div>
    </div>
   );
};
 
export default Error