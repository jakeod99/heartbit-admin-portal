import Error from '../comps/Error';

const NotFound = ({content, alt}) => {
  return (
    <Error content={"Oops! Page not found."} alt="not found" />
    // <div>
    //   <div className="nf-image">
    //     <Image src='/flatlining.png' width={700} height={200} alt="not found" />
    //   </div>
    //   <div className="nf-text">
    //     Oops! Page not found.
    //   </div>
    // </div>
   );
}
 
export default NotFound
