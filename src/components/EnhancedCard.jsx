export default function EnhancedCard({imgUrl,firstName,LastName,Gender,PhoneNumber,country}) {
    return (
        <div className="flex  flex-col  min-w-[250px] w-[350px] bg-gray-200 h-fit shadow-lg  px-4 py-4 rounded-lg items-start gap-2 hover:cursor-pointer  border border-transparent hover:border-[2px]  hover:border-purple-900 transition duration-300">
       <div className="w-full h-1/2 flex justify-center rounded-2xl rounded-tl-none rounded-br-none  bg-purple-600 p-4" ><img src={imgUrl} alt="user-image" className="  border-[2px]  rounded-full " /></div> 

            <div className=" w-full bg-white p-2 flex flex-col justify-between items-start font-semibold gap-1">
                <p className="text-2xl mb-4">{firstName} {LastName}</p>
                <p className="text-sm text-gray-800"> Gender: {Gender.toUpperCase()}</p>
               <div className="flex justify-between items-center w-full text-gray-800" > <p className="text-sm text-gray-800"> Number:  {PhoneNumber}</p>  <p className=" text-xs bg-purple-500 p-1 text-black rounded-md"> {country}</p></div>
            </div>
        </div>
    );
};
