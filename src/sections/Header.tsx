import LogoIcon from "../assets/Logo.jpg"

export function Header() {
   return (
     <header className="py-4">
       <div className="container">
         <div className="flex justify-between ">
           <div>
            <LogoIcon className=""/>
           </div>
           <div className="flex items-center space-x-4">
             <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
               Join Waitlist
             </button>
             <span>Menu</span>
           </div>
         </div>
       </div>
     </header>
   );
 }
 