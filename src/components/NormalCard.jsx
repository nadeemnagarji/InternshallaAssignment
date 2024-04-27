export default function NormalCard({imgUrl,firstName,LastName,Gender,PhoneNumber}) {
    return (
       
        <div className="flex min-w-[250px] w-[400px] h-fit rounded-br-none  rounded-tl-none bg-purple-400 bg-gray-200 shadow-xl px-4 py-4 rounded-2xl items-center gap-5 hover:cursor-pointer  border border-transparent hover:border-[2px]  hover:border-b-purple-600 hover:border-r-purple-600 transition duration-300">
       <div className="w-1/2  h-full flex justify-center "> <img src={imgUrl} alt="user-image" className="  rounded border-[2px]" /></div>

            <div className="flex flex-col  p-2 justify-between items-start font-semibold">
                <p className="text-2xl mb-4">{firstName} {LastName}</p>
                <p className="text-sm mb-1">Gender: {Gender.toUpperCase()}</p>
                <p className="text-sm ">Number: {PhoneNumber}</p>
            </div>
        </div>
       
    );
};
