import NavigationBar from "./NavigationBar";

const Header = ()=>{
    return (
        <div className="p-2 sm:p-4 flex justify-between items-center bg-green-500">
            <h1 className="sm:text-5xl font-bold text-blue-700">SSB PREP</h1>
            <NavigationBar/>
        </div>
    )
}

export default Header;